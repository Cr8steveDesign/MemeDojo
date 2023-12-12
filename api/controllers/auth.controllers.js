import { User } from "../models/models.js";
import bcryptjs from "bcryptjs";
// import { errorHandler } from '../utils/error.js';
import jwt from "jsonwebtoken";

//Implementing the SignUp of a new User
const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  //Save the new user to the database asynchronously
  try {
    await newUser.save();
    res.status(201).json({ message: "User Successfully created!" });

    //catch errors
  } catch (error) {
    res.status(403).json({
      success: false,
      message:
        "Error Creating a New User. Username or Email may already exist. Please Try again.",
    });
    next();
  }
};

// You'll need a JWT Secret to mask the token signed by jwt

const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Use the email to look for a valid user
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(404).json({ message: "User not Found!" });
    }
    //Compare the returned user password if not null to the password given in req.body
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials. Try again" });
    }

    // At this point the valid user is assumed to be correct with its password
    // Now create a token to sent to the client
    // The token will hold the user ID which will then be used to make
    // certain requests from the front end
    // Ensure you have your JWT_TOKEN saved in your .env file
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // Generate expiry date for token
    const expiryDate = new Date((Date.now() + 3600000) * 24); // 24 hours

    // Remove password from the returned user before sending back to client
    // When destructuring the returned user Object from Mongodb you have to
    // use the ._doc to access the main values without the extra baggage
    const { password: removedpassword, ...userData } = validUser._doc;

    // Set the cookie to the response object to the client
    res
      .cookie("user_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(userData);
  } catch (error) {
    next(error);
  }
};

const signOut = (req, res, next) => {
  // When Signing out, you simply just clear the cookies from the browser
  res
    .clearCookie("user_token")
    .status(200)
    .json({ message: "Signed out Successfully" });

  next();
};

export { signUp, signOut, signIn };
