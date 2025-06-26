import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Initiatives from "./pages/Initiatives.jsx";
import Contact from "./pages/Contact.jsx";
import BlogPage from "./BlogPage.jsx";
import DonatePage from "./DonatePage.jsx";
import Header from "./Header.jsx";
import Congrats from "./Congrats.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/initiatives",
        element: <Initiatives />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/blogpage",
        element:<BlogPage/>,
      },
      {
        path:"/donatepage",
        element:<DonatePage/>,
      },
      {
        path:"/donatepage",
        element:<Header/>,
      },
      {
        path:"/congrats",
      element:<Congrats/>,
      },
      {
        path:"/donatepage",
        element:<Initiatives/>,
      }
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
