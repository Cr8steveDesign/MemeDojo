import jwt from "jsonwebtoken";

// This middleware will be used to check if the user's id sent as req.param.id matches
// The token you have

const verifyUser = (req, res, next) => {
  // Retrieve token from cookies in request object
  const token = req.cookies.user_token;

  //check if the token is not correct at which you should return
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "You're not authenticated for this action. Please Sign In",
    });
  }

  // Assuming there is a token in the cookies
  // You now have to use the verify method from jwt to get the
  // The userData here is the item that was saved when you signed
  // the jwt token during signin

  jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid token!" });
    }

    // If token is valid, then you can append the returned userData
    // to the request object before sending off to the next controller

    req.user = userData;
    next();
  });
};

export default verifyUser;
