import React, { useState } from 'react';
import '../../assets/CSS/signup.css';
import formImage from '../../assets/images/bg.svg';
import googleIcon from '../../assets/images/Google.svg';
import line from '../../assets/images/line.svg';
import { Link } from 'react-router-dom';
import axios from 'axios'
import CustomModal from '../../components/EmailVerificationModal/CustomModal'
const UserRoleSelect = ({ value, onChange }) => (
  <form>
    <label htmlFor="roleSelect">What are you registering as?</label> <br/>
    <select id="roleSelect" style={{width: "500px", padding: "15px", border: "1.5px solid #000080", borderRadius:" 8px", marginBottom:"3%"}} value={value} onChange={onChange}>
      <option value="">Select choice</option>
      <option value="user">User</option>
      <option value="agent">Agent</option>
    </select>
  </form>
);

const SignUp = () => {
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const validatePhoneNumber = (phoneNumber) => {
    
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role || !firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Password validation: at least 6 characters, at least one letter, one number, and one special character
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long and contain letters, numbers, and special characters');
      return;
    }

    setError('');
    // Add your form submission logic here
    const userData = {
      role,
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword
    };

    try {
      const response = await axios.post(
        "https://localhost:7198/api/User/sign-up",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data); 
      // Handle successful signup
      setUserId(response.data.userId);
      setIsSignUpSuccess(true);
      localStorage.setItem("email", email);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", response.data.userId);

    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error(
          "Request was made but server responded with status:",
          error.response.status
        );
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(
          "Request was made but no response was received:",
          error.request
        );
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("An error occurred:", error.message);
      }
    }
  };

  return (
    <div className="signupContainer">
      <img src={formImage} alt="delivery-guy" className='sign-in-img'/>
      <div className="signupForm">
        <div className="signupHeader">
          <h1>Neighbourhood Help</h1>
          <h2>Create Your Account</h2>
          {/* <button className="googleSearch">
            <img src={googleIcon} alt="google-icon" />{" "}
            <span>Sign in with Google</span>
          </button> */}
          {/* <div className="OR">
            <img src={line} alt="line" className="lineImage" />
            <span>OR </span>
            <img src={line} alt="line" className="lineImage" />
          </div> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputFields">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='Enter your First Name'
              style={{ paddingLeft: "15px" }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputFields">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Enter your Last Name'
              style={{ paddingLeft: "15px" }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputFields">
            <UserRoleSelect value={role} onChange={handleRoleChange} />
          </div>
          <div className="inputFields">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email address'
              style={{ paddingLeft: "15px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputFields">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder='Enter your phone number'
              style={{ paddingLeft: "15px" }}
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="inputFields">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Create a password'
              style={{ paddingLeft: "15px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputFields">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Confirm your password'
              style={{ paddingLeft: "15px" }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button
            type="submit"
            className="signupbtn"
            style={{ marginLeft: "15%" }}
          >
            Sign Up
          </button>
          <p>
            <span className="paragraph" style={{ marginLeft: "30%" }}>
              Already have an account?
            </span>{" "}
            <Link to="/login">Sign In here</Link>
          </p>
        </form>
        <CustomModal isOpen={isSignUpSuccess} />
      </div>
    </div>
  );
};

export { SignUp };
