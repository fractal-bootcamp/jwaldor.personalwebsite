import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/deeper";
import Welcome from "./routes/root";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "deeper",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen justify-center bg-gradient-to-b from-[#5a7ac6] to-[#072687]">
      <RouterProvider router={router} />
    </div>
    {/* <App /> */}
  </React.StrictMode>
);
