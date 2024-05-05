import React, { useState } from 'react';
import '../../assets/CSS/resetinstruction.css';
import formImage from '../../assets/images/bg.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ResetInstruction = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
       await axios.post('https://localhost:7198/api/User/forgot-password?email=' + encodeURIComponent(email));
      setSuccessMessage('We have sent you an email'); 
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="resetinstructionContainer">
      <img src={formImage} alt="delivery-guy" />
      <div className="resetinstructionForm">
        <div className="resetinstructionHeader">
          <h1>Neighbourhood Help</h1>
          <h2>RESET YOUR PASSWORD</h2>
          <p className="resetinstructionParagraph">
            Enter your email below and we'll send you <br /> instructions on how to reset your password.
          </p>
        </div>
        {successMessage ? (
          <p className="successMessage">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="inputFields">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: '15px' }}
              />
              {error && <p className="error">{error}</p>}
            </div>
            <button type="submit" className="resetinstructionbtn" style={{ marginLeft: '15%' }}>
              Send reset instructions
            </button>
            <p>
              <span className="paragraph" style={{ marginLeft: '30%' }}>Already have an account?</span> <Link to="/login">Sign In here</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetInstruction;
