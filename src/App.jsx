import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnicornContainer from "./layouts";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnicornContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
