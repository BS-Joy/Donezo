import { useContext } from "react";
import { AuthContext } from "../contexts";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user?.token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default PublicRoute;
