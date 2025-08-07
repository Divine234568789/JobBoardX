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
import AddJobDetails from "./pages/AddJobDetails.jsx";
import Pay from "./pages/Pay.jsx";
import { PayProvider } from "./Contexts/PayContext.jsx";
import FinalizeJob from "./pages/FinalizeJob.jsx";

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
      {
        path: "/Job-Details",
        element: <AddJobDetails />,
      },
      {
        path: "/ChoosePay",
        element: <Pay />,
      },
      {
        path: "/Finalization",
        element: <FinalizeJob />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PayProvider>
      <Suspense fallback={<PageLoading />}>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </Suspense>
    </PayProvider>
  </StrictMode>
);
