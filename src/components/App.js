//import '../styles/App.css';
import Home from '../pages/Home';
import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import ResetInstruction from "../components/SendResetInstruction/ResetInstruction"; // Import the correct Confirm component


function App() {
  return (
   <>
    <Home />
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
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
