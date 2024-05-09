// NegotiatePrice.js
import React, { useState } from 'react';
import axios from 'axios';
import './NegotiatePrice.css';

const NegotiatePrice = ({ onAccept, onDecline }) => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleButtonClick = async (action) => {
        try {
            const errandId = JSON.parse(localStorage.getItem('errandId'));
            
            let response;
            switch (action) {
                case 'accept':
                    response = await axios.post(`https://localhost:7198/api/Price/user/accept?errandId=${errandId}`);
                    onAccept();
                    break;
                case 'decline':
                    response = await axios.post(`https://localhost:7198/api/Price/user/decline?errandId=${errandId}`);
                    window.location.reload();
                    onDecline();
                    break;
                case 'counter':
                    response = await axios.post('https://localhost:7198/api/Price/user/counter', { errandId, counterPrice: amount });
                    window.location.reload();
                    break;
                default:
                    break;
            }
            localStorage.setItem('agent', JSON.stringify(response.data));
            localStorage.setItem('price', JSON.stringify(response.data.message.price));
            
        } catch (error) {
            window.alert(error.response.data);
        }
    };

    return (
        <div className="bottom-1">
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
    