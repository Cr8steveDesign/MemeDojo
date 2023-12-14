// This will component will only return the outlet
// i.e routes nested in it, only if user is true.

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = false;

  // Turns out putting it in a tenary operator was not working; hence this
  if (user) return <Outlet />;
  if (!user) return <Navigate to="/signin" />;
};

export default PrivateRoutes;
