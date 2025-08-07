import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      toast.error("All fields are required.");
      return;
    }

    const storedUser = localStorage.getItem(`user:${email}`);
    if (!storedUser) {
      toast.error("No account found with this email.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.password !== password) {
      toast.error("Incorrect password.");
      return;
    }
    if (parsedUser.name !== name) {
      toast.error("Incorrect Username.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(parsedUser));

    toast.success(`Welcome back, ${parsedUser.name}!`);
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="relative w-screen h-screen log">
      <img
        src="/img/logimg.jpeg"
        alt="Background Image"
        width={300}
        className="h-screen w-screen blur-xs absolute"
      />
      <main className="flex-grow flex items-center justify-center py-8 px-4 relative">
        <div className="w-full max-w-md bg-blue-400 border border-black bg-opacity-80 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Log In</h1>
          <form action="" onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full p-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-800"
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded cursor-pointer hover:bg-blue-800 transition duration-200"
            >
              Log In
            </button>
          </form>
          {error && <p className="text-blue-600 mt-3">{error}</p>}
        </div>
      </main>
    </div>
  );
};

export default Login;
