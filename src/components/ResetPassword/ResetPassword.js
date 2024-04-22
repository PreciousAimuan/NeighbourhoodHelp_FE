import React, { useState } from 'react';
import '../ResetPassword/resetpassword.css';
import formImage from '../../assets/images/bg.svg';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6 || !/\d/.test(password) || !/[a-zA-Z]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
      setError('Password must be not be less than 6');
      return;
    }

    setError('');
    
  };

  return (
    <div className="resetpasswordContainer">
      <img src={formImage} alt="delivery-guy" />
      <div className="resetpasswordForm">
        <div className="resetpasswordHeader">
          <h1>Neighbourhood Help</h1>
          <h2>RESET YOUR PASSWORD</h2>
          <p className="resetpasswordParagraph">Enter your email below and we'll send you <br /> instructions on how to reset your password.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputFields">
            <label htmlFor="password">New Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{paddingLeft:"15px"}} />
          </div>
          <div className="inputFields">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{paddingLeft:"15px"}} />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="resetpasswordbtn" style={{marginLeft:"15%"}}>Send reset instructions</button>
          <p><span className="paragraph"  style={{marginLeft:"30%"}}>Don't have an account?</span> <Link to="/signup">Sign Up here</Link></p>
        </form>
          
      </div>
    </div>
  );
};

export default ResetPassword;
