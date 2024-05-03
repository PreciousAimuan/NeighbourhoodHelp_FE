import React from 'react'
import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
import UserDetails from "../../components/ActivityTracking/UserDetails";
import AgentNegotiatePrice from "../../components/NegotiatePrice/AgentNegotiatePrice";

const errandCreated = JSON.parse(localStorage.getItem('errandCreated'));
  const responseData2 = JSON.parse(localStorage.getItem('responseData2'));

const AgentDashboard = () => {
  return (
    <div className="dashboard">
        <Sidebar />
      <div>
      {errandCreated && (
        <React.Fragment>
            {responseData2 && <UserDetails agent={responseData2} />}
            <AgentNegotiatePrice />
        </React.Fragment>
)}
      </div>
    </div>
  );
}

export default AgentDashboard