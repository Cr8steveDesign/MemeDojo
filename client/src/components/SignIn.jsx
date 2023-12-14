//The Signin Component

import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

const SignIn = () => {
  // Set the userData from the Server
  // const { currentUser } = useSelector((state) => state.user);

  // Instatiate dispatch function
  const dispatch = useDispatch();

  // Ref on the signin button
  const buttonRef = useRef(null);

  // the signin process is loading
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({
    success: true,
    message: "",
  });

  // instantiate a navigator with the useNavigate hook
  // this is to allow you change page when called.
  const changePage = useNavigate();

  //create a form state to hold the form Data
  const [formData, setFormData] = useState({});

  // function to handle data entry on form
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function to handle the submit of the form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    setFormError({ ...formError, message: null });
    buttonRef.current.setAttribute("disabled", "");

    //make call to the backend
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Check for Failure to create User

      if (data.status !== 200) {
        throw new Error(data.message);
      }

      // On Success redirect to the sign in page
      setLoading(false);
      buttonRef.current.removeAttribute("disabled");
      setFormData({});

      // Valid user data
      dispatch(signInSuccess(data.data));
      changePage("/");

      // Any error from  server should be sent back.
    } catch (error) {
      setFormError({ message: error.message });
      setLoading(false);
      buttonRef.current.removeAttribute("disabled");
    }
  };

  return (
    <div className=" max-w-lg bg-slate-200 p-5 box-border  overflow-x-hidden mx-auto self-center rounded-md text-indigo-950">
      <div
        id="container001"
        className=" flex flex-col p-5 justify-center items-center mx-auto text-center"
      >
        <h1 className=" text-5xl font-black mb-1 cursor-pointer text-indigo-800 ">
          🥷 MemeDojo 🫣
        </h1>
        <p className=" text-base ">Sign In to see Hilarious Memes from</p>
        <p className="mb-4">your friends and the world!</p>

        <form className="mt-3" onSubmit={handleFormSubmit}>
          {!formError.success ? (
            <p className="text-sm text-red-600 mb-2">{formError.message}</p>
          ) : (
            ""
          )}
          <input
            className="p-3 mb-3 w-full rounded-md"
            type="email"
            placeholder="Enter Email Address"
            required
            name="email"
            autoFocus
            onChange={handleFormChange}
          />

          <input
            className="p-3 mb-3 w-full rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={handleFormChange}
          />
          <p className="text-xs">
            By using our platform, you agree to our to post respectful contents
            only and respect the rights and views of other members.
          </p>
          <input
            className="p-5 mb-1 mt-3 w-full rounded-md bg-indigo-800 uppercase font-extrabold text-xl text-white hover:bg-indigo-600 cursor-pointer transition ease-in-out duration-500  disabled:bg-slate-900 disabled:opacity-70 disabled:cursor-wait"
            type="submit"
            value="Sign in 🫡"
            ref={buttonRef}
          />
        </form>
      </div>
      <hr className=" h-0.5 mx-auto w-full bg-slate-500 mb-3" />
      <div id="container002" className="text-center text-lg font-semibold ">
        <Link to="/signup">
          <p>You norva get account?? Oya Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
