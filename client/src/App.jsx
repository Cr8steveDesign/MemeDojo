// Import Components and Packages

// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import HomePage from "./HomePage";

//Functional Component for the App - Would serve as the overall tontainer
function App() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-50 flex justify-center items-start">
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        <HomePage />
      </div>
    </>
  );
}

export default App;
