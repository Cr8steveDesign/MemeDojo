//The Signin Component

import { Link } from "react-router-dom";

const SignIn = () => {
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

        <form className="mt-3">
          <input
            className="p-3 mb-3 w-full rounded-md"
            type="email"
            placeholder="Enter Email Address"
            required
            name="email"
            autoFocus
          />

          <input
            className="p-3 mb-3 w-full rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <p className="text-sm">
            By using our platform, you agree to our to post respectful contents
            only and respect the rights and views of other members.
          </p>
          <input
            className="p-5 mb-1 mt-3 w-full rounded-md bg-indigo-800 uppercase font-extrabold text-xl text-white hover:bg-indigo-600 cursor-pointer transition ease-in-out duration-500"
            type="button"
            value="Sign in 🤪🤪"
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
