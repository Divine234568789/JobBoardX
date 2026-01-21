import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const existingUser = localStorage.getItem(`user:${email}`);
    if (existingUser) {
      toast.error("An account with this email already exists.");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(`user:${email}`, JSON.stringify(user));
    toast.success("Account created! Redirecting to login...");
    setTimeout(() => navigate("/Login"));
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src="/img/logimg.jpeg"
        alt="Background"
        className="h-full w-screen blur-xs absolute"
      />

      <main className="flex-grow flex items-center justify-center py-8 px-4 relative">
        <div className="w-full max-w-md bg-blue-400 bg-opacity-80 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8 text-white">
            Sign Up with <span className="text-blue-600">JobBoardX</span>
          </h1>

          <form onSubmit={handleSignup} className="space-y-6">
            <input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-800"
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-800"
              >
                {showConfirmPassword ? (
                  <EyeClosed size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:cursor-pointer hover:bg-blue-900 transition duration-200"
            >
              Register Now
            </button>
          </form>

          {error && <p className="text-red-600 mt-3">{error}</p>}

          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Already have an account?{" "}
              <a
                href="/Login"
                className="text-white hover:underline font-medium"
              >
                Log In now
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
