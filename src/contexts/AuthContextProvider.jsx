import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  );

  const logOutUser = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext value={{ user, setUser, logOutUser }}>{children}</AuthContext>
  );
};
