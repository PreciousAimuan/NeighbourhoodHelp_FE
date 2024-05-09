import React, { useState } from 'react';
import axios from 'axios';
import './NegotiatePrice.css';

const AgentNegotiatePrice = ({ onAccept, onDecline, onCounterOffer }) => {
    const [amount, setAmount] = useState('');

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleAccept = async () => {
        try {
            localStorage.setItem('status', 'Kindly accept the errand, do not forget to confirm on arrival!');
            onAccept();
            

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDecline = async () => {
        try {
            const errandId = JSON.parse(localStorage.getItem('errandId'));
            const response = await axios.post(`https://localhost:7198/api/Price/agent/decline?errandId=${errandId}`);
            console.log(JSON.stringify(response.data));
            localStorage.setItem('responseData2', JSON.stringify(response.data));
            localStorage.setItem('price', JSON.stringify(response.data.message.price));
            
            // Call parent function
            onDecline();
            

        } catch (error) {
            window.alert(error.response.data);
        }
    };

    const handleCounterOffer = async () => {
        try {
            const errandId = JSON.parse(localStorage.getItem('errandId'));
            const response = await axios.post('https://localhost:7198/api/Price/agent/counter', { errandId, counterPrice: amount });
            console.log(JSON.stringify(response.data));
            localStorage.setItem('responseData2', JSON.stringify(response.data));
            localStorage.setItem('price', JSON.stringify(response.data.message.price));
            window.location.reload();
            // Call parent function
            onCounterOffer();
            

        } catch (error) {
            window.alert(error.response.data);
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
                    onClick={handleAccept}
                >
                    Accept
                </button>
                <button
                    id="decline"
                    className="decline"
                    onClick={handleDecline}
                >
                    Decline
                </button>
                <button
                    id="counter"
                    className="counter"
                    onClick={handleCounterOffer}
                >
                    Counter
                </button>
            </div>
        </div>
    );
};

export default AgentNegotiatePrice;
