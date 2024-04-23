//import '../styles/App.css';
import Home from '../pages/Home';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp }from "../pages/auth/SignUp";
import { Login }from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import ResetInstruction from "../pages/auth/ResetInstruction"; // Import the correct Confirm component
import Receive from './Package/Receive';
import Receive2 from './Package/Receive2';
import Receive3 from './Package/Receive3';
import Receive4 from './Package/Receive4';
import Receive5 from './Package/Receive5';
import Dashboard_sidebar from './Dashboard/Dashboard_sidebar';

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
          <Route path='/receive' element={<Receive />}/>
          <Route path='/receive/2' element={<Receive2 />}/>
          <Route path='/receive/3' element={<Receive3 />}/>
          <Route path='/receive/4' element={<Receive4 />}/>
          <Route path='/receive/5' element={<Receive5 />}/>
          <Route path='/dashboard' element={<Dashboard_sidebar/>}/>
        </Routes>
      </Router>
   </>
  );
}


export default App;
