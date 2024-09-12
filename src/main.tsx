import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Datenschutz from "./components/Datenschutz";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
