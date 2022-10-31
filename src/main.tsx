import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "@components/About";
import { Home } from "@components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
