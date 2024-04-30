import React, { useEffect, useState } from 'react';
import '../../assets/CSS/resetpassword.css';
import formImage from '../../assets/images/bg.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import axios from 'axios'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [newPassword, setnewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const location = useLocation();
  const email = new URLSearchParams(location.search).get('email');
  const token = encodeURIComponent(new URLSearchParams(location.search).get('token'));
  
  useEffect(() => {
    
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.patch(`https://localhost:7198/api/User/reset-password?email=${email}&token=${token}&newPassword=${newPassword}`);
      
      toast.success('Password reset successfully!', {
        position: 'top-center',
        className: "toast-message",
      });

      setTimeout(() => {
        navigate('/login'); 
      }, 3000);
      
    } catch (error) {
      console.error(error);
      setError('An error occurred while resetting the password.');
    }
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
            <input type="password" id="password" name="password" value={newPassword} onChange={(e) => setnewPassword(e.target.value)} style={{paddingLeft:"15px"}} />
          </div>
          <div className="inputFields">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{paddingLeft:"15px"}} />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="resetpasswordbtn" style={{marginLeft:"15%"}}>Reset Password</button>
          <p><span className="paragraph"  style={{marginLeft:"30%"}}>Don't have an account?</span> <Link to="/signup">Sign Up here</Link></p>
        </form>
          
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
