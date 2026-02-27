import { useContext, useState } from "react";
import Spinner from "../ui/Spinner";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { axiosInstance } from "../../lib/axios";
import { AuthContext } from "../../contexts";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Invalid email.";
    if (!formData.password) errs.password = "Password is required.";
    else if (formData.password.length < 8)
      errs.password = "Minimum 8 characters.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    } else {
      setErrors({});
    }
    setLoading(true);

    try {
      const res = await axiosInstance.post("/login", formData);

      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);
      }
    } catch (error) {
      if (error.response) {
        const msg = error.response.data.error || "Login failed.";
        setErrors({ loginError: msg });
      } else {
        setErrors({ server: "Network error. Please try again." });
      }
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-150 ${
            errors.email
              ? "border-red-400 focus:ring-red-200"
              : "border-gray-200 focus:ring-primary/20 focus:border-primary"
          }`}
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
          Password
        </label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Min. 8 characters"
            className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm text-gray-800 placeholder-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-150 ${
              errors.password
                ? "border-red-400 focus:ring-red-200"
                : "border-gray-200 focus:ring-primary/20 focus:border-primary"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            tabIndex={-1}
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">{errors.password}</p>
        )}
      </div>

      {(errors.loginError || errors.server) && (
        <p className="text-xs bg-red-200 text-center rounded py-2 text-red-600 mt-1">
          {errors.loginError || errors.server}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 py-3.5 rounded-xl bg-linear-to-br from-primary to-[#2d8c56] text-white text-sm font-bold tracking-wide shadow-md hover:shadow-lg hover:from-[#154d2f] hover:to-[#257a4a] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? (
          <Spinner size={4} />
        ) : (
          <>
            Log In
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
