import { useContext } from "react";
import { AuthContext } from "../contexts";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user?.token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
