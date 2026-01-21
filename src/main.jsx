import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PageLoading from "./components/PageLoading";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Post from "./pages/Post";
import AddJobDetails from "./pages/AddJobDetails";
import Pay from "./pages/Pay";
import FinalizeJob from "./pages/FinalizeJob";
import { JobProvider } from "./contexts/JobContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import JobApplicationPage from "./pages/JobApllicationPage";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const JobPage = lazy(() => import("./pages/JobPage.jsx"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Register",
        element: <RegisterPage />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      { path: "/", element: <HomePage /> },

      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/Jobs",
            element: <JobPage />,
          },

          {
            path: "/Contact Us",
            element: <ContactPage />,
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
          { path: "/apply/:id", element: <JobApplicationPage /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobProvider>
      <Suspense fallback={<PageLoading />}>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </Suspense>
    </JobProvider>
  </StrictMode>
);
