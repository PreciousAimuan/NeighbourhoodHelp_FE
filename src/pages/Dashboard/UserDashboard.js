import React, { useState, useEffect } from 'react';
import "./UserDashboard.css";
import Send from "../../assets/images/send.svg";
import Receive from "../../assets/images/receive.svg";
import { Link } from "react-router-dom";
import AgentDetails from "../../components/ActivityTracking/AgentDetails";
import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import NegotiatePrice from "../../components/NegotiatePrice/NegotiatePrice";
import ConfirmErrand from '../../components/ConfirmErrand/ConfirmErrand';

const UserDashboard = () => {
  const [errandCreated, setErrandCreated] = useState(false);
  const [agentData, setAgentData] = useState(null);
  const [isNegotiationAccepted, setIsNegotiationAccepted] = useState(false);
  const [showStatus, setShowStatus] = useState(true)
  const [status, setStatus] = useState('');

  useEffect(() => {
    const errandCreatedFromStorage = JSON.parse(localStorage.getItem('errandCreated'));
    setErrandCreated(errandCreatedFromStorage);

    // Fetch agent data if an errand has been created
    if (errandCreatedFromStorage) {
      const agentDataFromStorage = JSON.parse(localStorage.getItem('agent'));
      setAgentData(agentDataFromStorage);
    }

    // Fetch status from local storage
    const statusFromStorage = localStorage.getItem('status');
    setStatus(statusFromStorage);
    
  }, []);

  const handleNegotiationAccepted = () => {
    setIsNegotiationAccepted(true);
    setShowStatus(true);
    // Set the status in local storage
    localStorage.setItem('status', 'The agent has completed the errand, kindly accept the errand to confirm the errand has been completed');
  };

  const handleDecline = () => {
    setShowStatus(false);
    // Reset the status in local storage
    localStorage.setItem('status', "");
  };

  const handleConfirm = () => {
    setShowStatus(false);
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="page">
        <div className="container-1">
          <div className="sendPack">
            <Link to={'/receive'}>
              <div className="sendFrame">
                  <img className="undraw-on-the-way-re-swjt-1" src={Send} alt="" />
              </div>
            </Link>
            <span className="send-apackage">Send a package</span>
          </div>
          <div className="receivePack">
            <Link to={'/receive'}>
              <div className="receiveFrame">
                  <img
                    className="undraw-drone-delivery-re-in-951"
                    src={Receive}
                    alt=""
                  />
              </div>
            </Link>
            <span className="recieve-apackage">Receive a package</span>
          </div>
        </div>
        {errandCreated && agentData && (
          <React.Fragment>
            <AgentDetails agent={agentData} />
            {!isNegotiationAccepted ? (
              <NegotiatePrice onAccept={handleNegotiationAccepted} onDecline={handleDecline} />
            ) : (
              <ConfirmErrand onConfirm={handleConfirm} />
            )}
            {status && showStatus && (
              <div className="status-message">
                <p>{status}</p>
              </div>
            )}
          </React.Fragment>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default UserDashboard;
