import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DefaultProviders from "./components/default-providers/DefaultProviders.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultProviders>
      <App />
    </DefaultProviders>
  </React.StrictMode>
);
