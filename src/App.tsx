import React from "react";
import "./App.css";
import { Viewport } from "./components/viewport/Viewport";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Viewport />
    </Router>
  );
}

export default App;
