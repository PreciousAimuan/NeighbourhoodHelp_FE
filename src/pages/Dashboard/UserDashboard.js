import React from "react";
import "./UserDashboard.css";
import Send from "../../assets/images/send.svg";
import Receive from "../../assets/images/receive.svg";
import { Link } from "react-router-dom";
import AgentDetails from "../../components/ActivityTracking/AgentDetails";
import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import NegotiatePrice from "../../components/NegotiatePrice/NegotiatePrice";
const UserDashboard = () => {

  const errandCreated = JSON.parse(localStorage.getItem('errandCreated'));
  const responseData = JSON.parse(localStorage.getItem('responseData1'));
  console.log(responseData)

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
            <span className="recieve-apackage">Recieve a package</span>
          </div>
        </div>
        {errandCreated && (
      <React.Fragment>
          {responseData && <AgentDetails agent={responseData} />}
          <NegotiatePrice />
      </React.Fragment>
)}

        
      </div>
      <Navbar />
    </div>
  );
};

export default UserDashboard;
