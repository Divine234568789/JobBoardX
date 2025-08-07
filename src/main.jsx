import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PageLoading from "./components/PageLoading.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import Post from "./pages/Post.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const JobPage = lazy(() => import("./pages/JobPage.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/Jobs",
        element: <JobPage />,
      },
      {
        path: "/About Us",
        element: <AboutPage />,
      },
      {
        path: "/Contact Us",
        element: <ContactPage />,
      },
      {
        path: "/Register",
        element: <RegisterPage />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Posting",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<PageLoading />}>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </Suspense>
  </StrictMode>
);
