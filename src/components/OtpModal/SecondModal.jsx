import React, { useState } from "react";
import axios from "axios";

const SecondModal = ({ isOpen, email }) => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleContinue = async () => {
    try {
      const response = await axios.patch("https://localhost:7198/api/User/verify-otp", {
        email: email,
        otp: otp,
      });
      if (response.status === 200) {
        // Display success alert and redirect to login page
        alert("OTP verified successfully");
        window.location.href = "/login";
      } else {
        // Display error alert if OTP verification fails
        alert("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      // Display error alert if an error occurs during OTP verification
      alert("An error occurred while verifying OTP. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-content">
        <div className="custom-modal-body">
          <h3>Enter OTP!</h3>
          <p>Enter OTP for email: {email}</p>
          <form>
            <input
              className="otp-input"
              style={{ border: "1.5px solid #000080", padding: "12px", borderRadius: "8px" }}
              type="text"
              placeholder="e.g 123456"
              value={otp}
              onChange={handleOtpChange}
            />
          </form>
          <button onClick={handleContinue} className="custom-modal-action-button">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
