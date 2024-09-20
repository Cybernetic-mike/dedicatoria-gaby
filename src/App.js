import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Index";
import FloresAmarillas from "./components/flowers";
import FloresRojas from "./components/flowerRed";
import Musica from "./components/Musica";

function App() {
  return (
    <div>
      <Musica />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flores-amarillas" element={<FloresAmarillas />} />
        <Route path="/flores-rojas" element={<FloresRojas />} />
      </Routes>
    </div>
  );
}

export default App;
