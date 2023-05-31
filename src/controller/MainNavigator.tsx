import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/Mainpage/Dashboard";
import { Homepage } from "../view/dashboard/Homepage/Home";
function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
