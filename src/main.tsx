import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Datenschutz from "./components/Datenschutz";
import Impressum from "./components/Impressum";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </Router>
  </StrictMode>
);
