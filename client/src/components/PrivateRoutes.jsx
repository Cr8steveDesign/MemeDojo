// This will component will only return the outlet
// i.e routes nested in it, only if user is true.

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { currentUser } = useSelector((state) => state.user);

  // Turns out putting it in a tenary operator was not working; hence this
  if (currentUser) return <Outlet />;
  if (!currentUser) return <Navigate to="/signin" />;
};

export default PrivateRoutes;
