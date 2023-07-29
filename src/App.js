import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}
