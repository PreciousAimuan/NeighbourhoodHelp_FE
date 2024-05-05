// NegotiatePrice.js
import React, { useState } from 'react';
import axios from 'axios';
import './NegotiatePrice.css';

const NegotiatePrice = () => {
    const [amount, setAmount] = useState('');
    const [responseData, setResponseData] = useState(null); // State to store response data

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleButtonClick = async (action) => {
        try {
            console.log(`Button clicked: ${action}`);
        
            const errandId = JSON.parse(localStorage.getItem('errandId'));
            console.log('Errand ID:', errandId);  
            
            let response;
            switch (action) {
                case 'accept':
                    response = await axios.post(`https://localhost:7198/api/Price/user/accept?errandId=${errandId}`);
                    break;
                case 'decline':
                    response = await axios.post(`https://localhost:7198/api/Price/user/decline?errandId=${errandId}`);
                    break;
                case 'counter':
                    response = await axios.post('https://localhost:7198/api/Price/user/counter', { errandId, counterPrice: amount });
                    break;
                default:
                    break;
            }
            console.log(JSON.stringify(response.data));
            localStorage.setItem('agent', JSON.stringify(response.data)); // Set response data to local storage
            //localStorage.setItem('price', JSON.stringify(response.data.message.price));
            setResponseData(response.data); // Update state with response data
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bottom">
            <div className="amount-container">
                <input
                    type="text"
                    id="amount"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={handleAmountChange}
                />
                <button
                    id="accept"
                    className="accept"
                    onClick={() => handleButtonClick('accept')}
                >
                    Accept
                </button>
                <button
                    id="decline"
                    className="decline"
                    onClick={() => handleButtonClick('decline')}
                >
                    Decline
                </button>
                <button
                    id="counter"
                    className="counter"
                    onClick={() => handleButtonClick('counter')}
                >
                    Counter
                </button>
            </div>
        </div>
    );
};

export default NegotiatePrice;

