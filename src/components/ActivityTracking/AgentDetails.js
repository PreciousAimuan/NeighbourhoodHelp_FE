import React from "react";
import Pic from "../../assets/images/pic.jpg";
import Star from "../../assets/images/star.svg";
import Box from "../../assets/images/box.svg";
import "./AgentDetails.css";

//const agentName = "flo"

const agent = JSON.parse(localStorage.getItem('agent'))
const rating = JSON.parse(localStorage.getItem('rating'))

const AgentDetails = ({ agent }) => {
  // Check if agent data is in the initial format
  const agentData = agent.message ? agent.message : agent;
  console.log(agentData)
  const userPrice = localStorage.getItem("price");

  return (
    <div>
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
      <div className="top-half">
        <div className="blue-left">
          <div className="agent-pic">
            <img className="vector" src={Pic} alt="" />
          </div>
          <div className="more">
            <div className="agent-name">{agent.firstName + " " + agent.lastName}</div>
            <div className="group-3105">
              <span className="tell-us-more-1">{rating}</span>
              <img className="star" src={Star} alt="" />
            </div>
          </div>
        </div>
        <div className="price">

              
                {/* {agentData === agent.message ? 
                `Amount: ${agentData.price}` :
                `Amount: ${userPrice}`} */}
                Amount: {userPrice}

        </div>
        <div className="bright">
          <div className="tell-us-more-7">{agent.phoneNumber}</div>
          <div className="brg">
            <div className="tell-us-more-8">{agent.email}</div>
            {/* <div className="vuesaxbulkcopy">
              <img className="copy" src={Copy} alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
