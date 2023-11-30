import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import router from "./Router";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
