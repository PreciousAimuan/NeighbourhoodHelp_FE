// NegotiatePrice.js
import React, { useState } from 'react';
import axios from 'axios';
import './NegotiatePrice.css';

const AgentNegotiatePrice = () => {
    const [amount, setAmount] = useState('');
    const [responseData2, setResponseData] = useState(null); // State to store response data
    // const [currentAction, setCurrentAction] = useState(null); // State to store current action

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
                    response = await axios.post(`https://localhost:7198/api/Price/agent/accept?errandId=${errandId}`);
                    break;
                case 'decline':
                    response = await axios.post(`https://localhost:7198/api/Price/agent/decline?errandId=${errandId}`);
                    break;
                case 'counter':
                    response = await axios.post('https://localhost:7198/api/Price/agent/counter', { errandId, counterPrice: amount });
                    break;
                default:
                    break;
            }
            console.log(JSON.stringify(response.data));
            localStorage.setItem('responseData2', JSON.stringify(response.data));
            localStorage.setItem('price', JSON.stringify(response.data.message.price));
            setResponseData(response.data); // Set response data to state
            // setCurrentAction(action); // Set current action
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

export default AgentNegotiatePrice;


// // NegotiatePrice.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './NegotiatePrice.css';

// const NegotiatePrice = () => {
//     const [amount, setAmount] = useState('');
//     const [responseData2, setResponseData] = useState(null); // State to store response data
//     // const [currentAction, setCurrentAction] = useState(null); // State to store current action

//     const handleAmountChange = (event) => {
//         setAmount(event.target.value);
//     };

//     const handleButtonClick = async (action) => {
//         try {
//             console.log(`Button clicked: ${action}`);
        
//             const errandId = JSON.parse(localStorage.getItem('errandId'));
//             console.log('Errand ID:', errandId);  
            
//             let response;
//             switch (action) {
//                 case 'accept':
//                     response = await axios.post(`https://localhost:7198/api/Price/agent/accept?errandId=${errandId}`);
//                     break;
//                 case 'decline':
//                     response = await axios.post(`https://localhost:7198/api/Price/agent/decline?errandId=${errandId}`);
//                     break;
//                 case 'counter':
//                     response = await axios.post('https://localhost:7198/api/Price/agent/counter', { errandId, counterPrice: amount });
//                     break;
//                 default:
//                     break;
//             }
//             console.log(JSON.stringify(response.data));
//             localStorage.setItem('responseData2', JSON.stringify(response.data));
//             setResponseData(response.data); // Set response data to state
//             // setCurrentAction(action); // Set current action
//             window.location.reload();
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="bottom">
//             <div className="amount-container">
//                 <input
//                     type="text"
//                     id="amount"
//                     placeholder="Enter Amount"
//                     value={amount}
//                     onChange={handleAmountChange}
//                 />
//                 <button
//                     id="accept"
//                     className="accept"
//                     onClick={() => handleButtonClick('accept')}
//                 >
//                     Accept
//                 </button>
//                 <button
//                     id="decline"
//                     className="decline"
//                     onClick={() => handleButtonClick('decline')}
//                 >
//                     Decline
//                 </button>
//                 <button
//                     id="counter"
//                     className="counter"
//                     onClick={() => handleButtonClick('counter')}
//                 >
//                     Counter
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NegotiatePrice;


