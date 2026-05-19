import Home from "./Pages/Home";
import Countries from "./Pages/Countries";
import Navbar from "./Components/Navbar";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:id" element={<Countries />} />
      </Routes>

      

    </Router>
  );
}

export default App;