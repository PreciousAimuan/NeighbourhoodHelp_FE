//import '../styles/App.css';
import Home from '../pages/Home';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp }from "../pages/auth/SignUp";
import { Login }from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import ResetInstruction from "../pages/auth/ResetInstruction"; // Import the correct Confirm component


function App() {
  return (
   <> 
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/resetinstruction" element={<ResetInstruction />} /> 
 
        </Routes>
      </Router>
   </>
  );
}


export default App;
