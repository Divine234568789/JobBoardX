import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("isLoggedIn"));

  return user ? <Outlet /> : <Navigate to="/Register" replace />;
};

export default ProtectedRoutes;
