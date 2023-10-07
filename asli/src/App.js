import React from "react";
import LoginPage from "./components/loginPage";

import Welcome from "./pages/welcome";
import Chattwit from "./components/chattwit";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from "./components/register";
import ReferralSystem from "./components/codereferal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chattwit" element={<Chattwit />} />
        <Route path="/codereferal" element={<ReferralSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
