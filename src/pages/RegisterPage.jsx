import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { auth, googleProvider } from "../library/firebase";
import { signInWithPopup } from "firebase/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState < string > "";
  const [password, setPassword] = useState < string > "";
  const [confirmPassword, setConfirmPassword] = useState < string > "";
  const [error, setError] = useState < string > "";

  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    const handleSignin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        const userData = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
        };

        localStorage.setItem(`user:${user.email}`, JSON.stringify(userData));

        toast.success(`Signed up as ${user.displayName}`);
        navigate("/Login-page");
      } catch (error) {
        console.error(error);
        toast.error("Google sign-in failed");
      }
    };

    return handleSignin();
  };

  const handleSignup = (e) => {
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
      email,
      password,
    };

    localStorage.setItem(`user:${email}`, JSON.stringify(user));
    toast.success("Account created! Redirecting to login...");
    setTimeout(() => navigate("/Login-page"), 1500);
  };

  return (
    <div className="relative w-screen h-screen log">
      <header>
        <div className="bg-black h-full opacity-55 absolute overflow-hidden w-full"></div>
        <img
          src="/img/logo.png"
          alt="Netflix Logo"
          width={300}
          className="pl-28 pt-3 relative"
        />
      </header>

      <main className="flex-grow flex items-center justify-center py-8 px-4 relative">
        <div className="w-full max-w-md bg-[#141414] bg-opacity-80 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Sign Up</h1>
          <form action="/submit" onSubmit={handleSignup} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-3 rounded cursor-pointer hover:bg-red-900 transition duration-200"
            >
              Sign Up
            </button>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 rounded focus:ring-red-600"
                />
                <label htmlFor="remember" className="text-gray-400 text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a href="" className="text-gray-300 text-sm hover:underline">
                  Need help?
                </a>
              </div>
            </div>
          </form>
          {error && <p className="text-red-600 mt-3">{error}</p>}
          <div className="mt-8">
            <div className="flex items-center">
              <div className="h-px bg-gray-500 flex-grow"></div>
              <span className="px-4 text-gray-200 text-sm">OR</span>
              <div className="h-px bg-gray-500 flex-grow"></div>
            </div>

            <div className="mt-6 space-y-4">
              <button
                onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center bg-white text-black font-bold py-3 rounded hover:bg-gray-400 hover:cursor-pointer "
              >
                <i className="mr-2 text-red-600"></i>
                Sign in with Google
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              Already have an Account?
              <a
                href="/Login-page"
                className="text-white hover:underline font-medium"
              >
                Log In now
              </a>
              .
            </p>
          </div>

          <div className="mt-8 p-4 bg-black bg-opacity-40 rounded">
            <p className="text-xs text-gray-300 text-center">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="text-blue-500 hover:underline cursor-pointer">
                Learn more
              </span>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
