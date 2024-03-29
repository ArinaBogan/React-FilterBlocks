import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
      <BrowserRouter>
      <MantineProvider>
      <App />
      </MantineProvider>
      </BrowserRouter>
  
 
  </React.StrictMode>
);