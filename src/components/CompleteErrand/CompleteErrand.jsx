import React, { useState } from 'react';
import axios from 'axios';
import '../NegotiatePrice/NegotiatePrice.css';

const CompleteErrand = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleButtonClick = async () => {
        try {
            const errandId = JSON.parse(localStorage.getItem('errandId'));
            const response = await axios.post(`https://localhost:7198/api/Errand/completeErrand?errandId=${errandId}`);
            console.log(JSON.stringify(response.data));

            // Call parent function
            onComplete();

            // Update state to indicate completion
            setIsCompleted(true);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="amount-container">
            {!isCompleted ? (
                <button
                    id="completeErrand"
                    className="complete"
                    onClick={handleButtonClick}
                >
                    Complete Errand
                </button>
            ) : (
                <p className='errand-completed'>Errand completed!</p>
            )}
        </div>
    );
};

export default CompleteErrand;
