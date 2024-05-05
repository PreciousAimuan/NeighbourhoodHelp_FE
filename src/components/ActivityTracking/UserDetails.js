
import React from "react";
import Pic from "../../assets/images/pic.jpg";
import Star from "../../assets/images/star.svg";
import Box from "../../assets/images/box.svg";
import "./AgentDetails.css";

const UserDetails = () => {

    const userFirstname = JSON.parse(localStorage.getItem('userFirstname'))
    const userLastname = JSON.parse(localStorage.getItem('userLastname'))
    const userPhoneNumber = JSON.parse(localStorage.getItem('userPhoneNumber'))
    const userEmail = JSON.parse(localStorage.getItem('userEmail'))
    //const price = JSON.parse(localStorage.getItem('price'))
    //const userPrice = localStorage.getItem("price");
    const userPrice = JSON.parse(localStorage.getItem('price'))
    

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
            <div className="agent-name">{userFirstname} {userLastname}</div>
            <div className="group-3105">
              <span className="tell-us-more-1">3</span>
              <img className="star" src={Star} alt="" />
            </div>
          </div>
        </div>
        <div className="price">
            Amount: {userPrice}
        </div>
        <div className="bright">
          <div className="tell-us-more-7">{userPhoneNumber}</div>
          <div className="brg">
            <div className="tell-us-more-8">{userEmail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
