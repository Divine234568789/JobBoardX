import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const updateLoginStatus = () => {
      const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(isUserLoggedIn);
    };

    updateLoginStatus();

    window.addEventListener("storage", updateLoginStatus);
    return () => window.removeEventListener("storage", updateLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  const nav_links = [
    { name: "Home", link: "/", label: "home" },
    { name: "Jobs", link: "/Jobs", label: "Jobs" },
    { name: "Contact Us", link: "/Contact Us", label: "Contact Us" },
  ];

  return (
    <nav className="z-20 relative text-white font-bold px-4 bg-blue-700 md:bg-transparent lg:bg-transparent py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">JobBoardX</div>

        <ul className="hidden md:flex gap-10 text-[16px]">
          {nav_links.map((nav_link) => (
            <li key={nav_link.label} className="relative group">
              <a href={nav_link.link} className="transition-all duration-300">
                {nav_link.name}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {!isLoggedIn && (
            <Button
              label="Login"
              color="secondary"
              onClick={() => navigate("/Login")}
            />
          )}
          {!isLoggedIn && (
            <Button label="Register" onClick={() => navigate("/Register")} />
          )}
          {isLoggedIn && (
            <Button label="Logout" color="secondary" onClick={handleLogout} />
          )}
          {isLoggedIn && (
            <Button label="Post" onClick={() => navigate("/Posting")} />
          )}
          <div className="md:hidden">
            {menuOpen ? (
              <X
                className="w-6 h-6 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Menu
                className="w-6 h-6 cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 animate-slide-down">
          <ul className="flex flex-col gap-4 text-[16px]">
            {nav_links.map((nav_link) => (
              <li key={nav_link.label} className="hover:text-black text-center">
                <a href={nav_link.link}>{nav_link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
