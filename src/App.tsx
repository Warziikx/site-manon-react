import { RouterProvider } from "@tanstack/react-router";
import "./App.css";
import router from "./Router";
import { ThemeProvider } from "./context/ThemeProvider";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
