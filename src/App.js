import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import Status from "./StatusSuccess";
import StatusSuccess from "./StatusSuccess";
import StatusCancel from "./StatusCancel";
import StatusFailed from "./StatusFailed";



function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/status-success" element={ <StatusSuccess/> } />
        <Route path="/status-cancel" element={ <StatusCancel/> } />
        <Route path="/status-failed" element={ <StatusFailed/> } />

      </Routes>
    </div>
  );
}

export default App;