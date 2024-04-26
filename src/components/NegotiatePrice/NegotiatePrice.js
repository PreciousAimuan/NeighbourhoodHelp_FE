import React from 'react'
import { useState } from "react";
import './NegotiatePrice.css'

const NegotiatePrice = ({price}) => {
    const [amount, setAmount] = useState("");

    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };

    const handleButtonClick = (action) => {
      // Implement logic based on action (accept, decline, counter)
      console.log(`Button clicked: ${action}`);
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
          onClick={() => handleButtonClick("accept")}
        >
          Accept
        </button>
        <button
          id="decline"
          className="decline"
          onClick={() => handleButtonClick("decline")}
        >
          Decline
        </button>
        <button
          id="counter"
          className="counter"
          onClick={() => handleButtonClick("counter")}
        >
          Counter
        </button>
      </div>
    </div>
  );
}

export default NegotiatePrice