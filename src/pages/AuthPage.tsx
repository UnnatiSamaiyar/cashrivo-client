import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AuthPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    referCode: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const endpoint = mode === "signup"
        ? "http://localhost:5000/api/auth/signup"
        : "http://localhost:5000/api/auth/login";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        toast("Something went wrong. Please try again!");
        return;
      }

      // ✅ Save to localStorage
      localStorage.setItem("cashrivo_user", JSON.stringify(result));

      toast("Welcome to Cashrivo!")
      navigate("/"); // ✅ redirect after auth
    } catch (err) {
      console.error(err);
      toast("Something went wrong. Please try again!");
    }
  };


  const renderTitle = () => {
    switch (mode) {
      case "login":
        return "Welcome Back!";
      case "signup":
        return "Create Your Account";
      case "forgot":
        return "Reset Password";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F2] via-[#FFDADA] to-[#FBBF24] text-[#FF6B6B] ">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#27548A] mb-6">
          {renderTitle()}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            />
          )}

          {(mode === "login" || mode === "signup" || mode === "forgot") && (
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            />
          )}

          {(mode === "login" || mode === "signup") && (
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            />
          )}

          {mode === "signup" && (
            <input
              type="text"
              name="referCode"
              placeholder="Referral Code"
              value={formData.referCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
            />
          )}



          <button
            type="submit"
            className="w-full bg-[#FBBF24] text-white font-semibold py-2 rounded-md hover:bg-[#f8ae00] transition"
          >
            {mode === "login"
              ? "Login"
              : mode === "signup"
                ? "Sign Up"
                : "Send Reset Link"}
          </button>
        </form>

        {/* Switch mode links */}
        <div className="mt-6 text-center text-sm text-gray-600 space-y-1">
          {mode === "login" && (
            <>
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-[#27548A] font-medium hover:underline"
                >
                  Sign Up
                </button>
              </p>
              <p>
                Forgot your password?{" "}
                <button
                  onClick={() => setMode("forgot")}
                  className="text-[#27548A] font-medium hover:underline"
                >
                  Reset
                </button>
              </p>
            </>
          )}
          {mode === "signup" && (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#27548A] font-medium hover:underline"
              >
                Login
              </button>
            </p>
          )}
          {mode === "forgot" && (
            <p>
              Remember your password?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#27548A] font-medium hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
