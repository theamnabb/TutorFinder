import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const AuthPage = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // login | register | forgot
  const [role, setRole] = useState("student"); // student | tutor | admin
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password } = formData;

    if (mode === "register" && (!fullName || !email || !password)) {
      return toast.error("All fields are required.");
    }

    if ((mode === "login" || mode === "forgot") && (!email || (mode === "login" && !password))) {
      return toast.error("Please fill in all fields.");
    }

    if (mode === "register") {
      toast.success(`Registered as ${role}`);
      navigate(role === "tutor" ? "/tutor-dashboard" : "/student-dashboard");
    } else if (mode === "login") {
      toast.success(`Logged in as ${role}`);
      if (role === "admin") navigate("/admin-dashboard");
      else if (role === "tutor") navigate("/tutor-dashboard");
      else navigate("/student-dashboard");
    } else if (mode === "forgot") {
      toast.info(`Reset link sent to ${email}`);
      setMode("login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-deep to-secondary flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl border border-gray-200 space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="text-[28px] font-bold leading-[120%] flex items-center gap-x-2 text-deep"
          >
            <span className="inline-flex items-center justify-center p-2 h-10 w-10 bg-secondary text-tertiary rotate-[-31deg] rounded-full shadow-md">
              T
            </span>
            utorFinder
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {mode === "login"
            ? "Welcome Back"
            : mode === "register"
            ? "Create Account"
            : "Reset Password"}
        </h2>

        {/* Role Buttons */}
        <div className="flex justify-center gap-3">
          {["student", "tutor", "admin"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border ${
                role === r
                  ? "bg-deep text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
              disabled={mode === "register" && r === "admin"}
              title={
                mode === "register" && r === "admin"
                  ? "Admin can't register"
                  : ""
              }
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "register" && (
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <div className="flex items-center border rounded-md overflow-hidden">
                <span className="px-3 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full py-2 px-2 outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Email</label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 px-2 outline-none"
              />
            </div>
          </div>

          {mode !== "forgot" && (
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-deep focus:outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-deep"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-deep text-white font-semibold py-2 rounded-md hover:bg-deep/90 transition duration-300"
          >
            {mode === "login"
              ? `Login as ${role}`
              : mode === "register"
              ? `Register as ${role}`
              : "Send Reset Link"}
          </button>
        </form>

        {/* Mode Switcher */}
        <div className="text-center text-sm text-gray-600 space-y-1">
          {mode === "login" && (
            <>
              <button
                className="text-deep hover:underline block w-full"
                onClick={() => setMode("forgot")}
              >
                Forgot your password?
              </button>
              <span>
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="text-deep font-medium hover:underline"
                >
                  Register
                </button>
              </span>
            </>
          )}
          {mode === "register" && (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-deep font-medium hover:underline"
              >
                Login
              </button>
            </span>
          )}
          {mode === "forgot" && (
            <button
              onClick={() => setMode("login")}
              className="text-deep font-medium hover:underline"
            >
              ← Back to Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
