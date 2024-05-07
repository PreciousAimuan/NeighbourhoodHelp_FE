import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
import UserDetails from "../../components/ActivityTracking/UserDetails";
import AgentNegotiatePrice from "../../components/NegotiatePrice/AgentNegotiatePrice";
import CompleteErrand from '../../components/CompleteErrand/CompleteErrand';
import Dashboardrecenterrands from '../../components/Dashboardrecenterrands/Dashboardrecenterrands'
import "../Recenterrands/Recenterrands.css"

const AgentDashboard = () => {
  const [errandCreated, setErrandCreated] = useState(false);
  const [responseData2, setResponseData2] = useState(null);
  const [isNegotiatePriceVisible, setIsNegotiatePriceVisible] = useState(true);
  const [isCompleteErrandVisible, setIsCompleteErrandVisible] = useState(false);
  const [isUserDetailsVisible, setIsUserDetailsVisible] = useState(true);

  useEffect(() => {
    const errandCreatedFromStorage = JSON.parse(localStorage.getItem('errandCreated'));
    setErrandCreated(errandCreatedFromStorage);

    // Fetch response data if an errand has been created
    if (errandCreatedFromStorage) {
      const responseDataFromStorage = JSON.parse(localStorage.getItem('responseData2'));
      setResponseData2(responseDataFromStorage);
    }
  }, []);

  const handleAccept = async () => {
    // Handle accept logic
    setIsNegotiatePriceVisible(false);
    setIsCompleteErrandVisible(true);
    // Set flag in local storage indicating the agent has accepted the errand
    localStorage.setItem('agentAcceptedErrand', true);
  };

  const handleDecline = async () => {
    // Handle decline logic
    setIsNegotiatePriceVisible(false);
    setIsUserDetailsVisible(false);
    setIsCompleteErrandVisible(false);
  };

  const handleComplete = async () => {
    // Handle completion of the errand
    console.log('Errand completed!');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div>
        <Dashboardrecenterrands/>
        <div className="activity">
          {errandCreated && (
            <React.Fragment>
              {isUserDetailsVisible && <UserDetails />}
              {isNegotiatePriceVisible && <AgentNegotiatePrice onAccept={handleAccept} onDecline={handleDecline} />}
              {isCompleteErrandVisible && <CompleteErrand onComplete={handleComplete} />}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;
