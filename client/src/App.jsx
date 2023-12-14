// Import Components and Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PrivateRoutes from "./components/PrivateRoutes";
import HomePage from "./HomePage";

//Functional Component for the App - Would serve as the overall tontainer
function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-slate-50 flex justify-center items-start">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

const Profile = () => {
  return <div>This is the profile Route, testing Private Routes</div>;
};
