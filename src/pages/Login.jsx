import { useContext } from "react";
import LoginForm from "../components/login/LoginForm";
import Logo from "../components/Logo";
import { AuthContext } from "../contexts";
import { Navigate } from "react-router";

const Login = () => {
  const { user } = useContext(AuthContext);

  if (user?.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="min-h-screen bg-[#f4f6f3] flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="mb-8">
          <Logo />
          <h1 className="text-3xl font-bold text-gray-900 mt-4 leading-tight">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
