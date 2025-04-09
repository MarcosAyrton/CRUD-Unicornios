import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UnicornContainer from "./layouts";

import "./App.css";

function App() {
  return (
    <div className="bg-indigo-300 h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<UnicornContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
