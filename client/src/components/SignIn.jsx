//The Signin Component

//import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className=" text-base">
      <div id="container001" className="flex-col">
        <h1 className=" text-lg">MemeDojo</h1>
        <p>Sign Up to see Hilarious Memes from your friends and the world!</p>
        <p>OR</p>
        <input type="button" value="Login in With Google!" />
        <form>
          <input
            type="email"
            placeholder="Enter Email Address"
            required
            name="email"
          />
          <input
            type="text"
            placeholder="Enter Username"
            required
            name="username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            required
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            required
          />
          <p>
            By signing up, you agree to our to post respectful contents only and
            respect the rights and views of other members.
          </p>
          <input type="button" value="Sign Up!" />
        </form>
      </div>

      <div id="container002">
        <p>Have an Account? Sign In</p>
      </div>
    </div>
  );
};

export default SignIn;
