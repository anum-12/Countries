import { createRoot } from "react-dom/client";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:country",
        element: <CountryDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
