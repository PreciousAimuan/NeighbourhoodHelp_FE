import React from "react";
import "./UserDashboard.css";
import Send from "../../assets/images/send.svg";
import Receive from "../../assets/images/receive.svg";

import AgentDetails from "../../components/ActivityTracking/AgentDetails";
import Sidebar from "../../components/Dashboard/Dashboard_sidebar";
import Navbar from "../../components/Dashboard/Navbar";
import NegotiatePrice from "../../components/NegotiatePrice/NegotiatePrice";
const UserDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
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
        {/* <AgentDetails/>
        <NegotiatePrice/> */}
      </div>
      <Navbar />
    </div>
  );
};

export default UserDashboard;
