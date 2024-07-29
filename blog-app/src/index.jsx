import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Carousel1 from "./components/Carousel/Carousel";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Carousel1 />
    </ThemeProvider>
  </React.StrictMode>,
);
