
import React, { useState } from 'react';
//import axios from 'axios';
import '../NegotiatePrice/NegotiatePrice.css';

const ConfirmErrand = ({ onConfirm }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [status, setStatus] = useState('');

    const handleButtonClick = async () => {
        try {
            // const errandId = JSON.parse(localStorage.getItem('errandId'));
            // const response = await axios.post(`https://localhost:7198/api/Errand/confirmErrand?errandId=${errandId}`);
            // console.log(JSON.stringify(response.data));
            localStorage.setItem('status', 'Errand completed successfully.');
            // Call parent function
            onConfirm();
            // Update state to indicate confirmation
            setIsConfirmed(true);
            
            // const statusFromStorage = localStorage.getItem('status');
            // setStatus(statusFromStorage);


        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="amount-container">
            {!isConfirmed ? (
                <button
                    id="confirmErrand"
                    className="confirm"
                    onClick={handleButtonClick}
                >
                    Confirm Errand
                </button>
            ) : (
                null
            )}
            {status && (
              <div className="status-message">
                <p>{status}</p>
              </div>
            )}
        </div>
    );
};

export default ConfirmErrand;
