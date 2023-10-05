import React from "react";
import LoginPage from "./components/loginPage";
import Register from "./components/register";
import Welcome from "./pages/welcome";
import Chattwit from "./components/chattwit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/chattwit" element={<Chattwit />} />
      </Routes>
    </Router>
  );
}

export default App;
