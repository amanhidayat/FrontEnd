import { Routes, Route } from "react-router-dom"

import { useState } from "react"

import MainDisplay from "./components/mainDisplay";
import ChatDisplay from "./components/chatDisplay";

function App() {
  const [message, setMessage] = useState("")

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainDisplay setMessage={setMessage} />} />
        <Route path="/chatDisplay" element={<ChatDisplay message={message} />} />
      </Routes>
    </div>
  );
}

export default App;

