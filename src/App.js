import React from "react";
import Home from "./components/Home/Home";
import TheTribe from "./components/Tribe/Tribe";
import Roadmap from "./components/Roadmap/Roadmap"
import Team from "./components/Team/Team"
import Collections from "./components/Collections/Collections"
import './App.css';
import 'animate.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TheTribe" element={<TheTribe />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/team" element={<Team />} />
        <Route path="/Collections" element={<Collections />} />
      </Routes>
    </div>
  );
}

export default App;