import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing all files needed for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-css-only/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";

// importing all pages an App
import App from "./App";
import AboutMe from "./pages/AboutMePage/AboutMe";
import Contact from "./pages/ContactPage/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/ResumePage/Resume";

// creating routes for each page
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Resume",
        element: <Resume />
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
