import React from "react";
import "./UserDashboard.css";
import Send from "../../assets/images/send.svg";
import Receive from "../../assets/images/receive.svg";
import Box from "../../assets/images/box.svg";

import { useState } from "react";
import AgentDetails from "../../components/ActiveAgent/AgentDetails";
import Sidebar from "../../components/Dashboard/Dashboard_sidebar"
const UserDashboard = () => {
  const [amount, setAmount] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleButtonClick = (action) => {
    // Implement logic based on action (accept, decline, counter)
    console.log(`Button clicked: ${action}`);
  };

  return (
    <div className="dashboard">
        <Sidebar/>
      <div className="page">
        <div className="container-1">
          <div className="sendPack">
            <div className="sendFrame">
              <img className="undraw-on-the-way-re-swjt-1" src={Send} alt="" />
            </div>
            <span className="send-apackage">Send a package</span>
          </div>
          <div className="receivePack">
            <div className="receiveFrame">
              <img
                className="undraw-drone-delivery-re-in-951"
                src={Receive}
                alt=""
              />
            </div>
            <span className="recieve-apackage">Recieve a package</span>
          </div>
        </div>
        <div className="container-2">
          <div className="trackingdiv">
            <div className="tracking">
              <div className="boxx">
                <div className="vuesaxbulkbox-search">
                  <img className="box-search" src={Box} alt="" />
                </div>
              </div>
              <span className="tracking-activity">Tracking Activity</span>
            </div>
            <div className="view-progress">View Progress</div>
          </div>
          <div className="frame-38813411">
            <AgentDetails
              agentName="James Fredder"
              agentPhone="+234811223344"
            />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
