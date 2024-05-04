// Card.js
import React from "react";
import Calender from "./assets/calendar.png";
import DeleteIcon from "./assets/trash.png";
import CopyIcon from "./assets/copy.png"
import SendIcon from "./assets/send-2.png"
import LocationIcon from "./assets/location.png"

function Card({ data }) {
  const {
    date,
    leftContent,
    rightContent,
    address,
  } = data;

  return (
    <div className="card">
      <div className="first-div">

        <div className="innerfirst-div">
        <img src={Calender} alt="Calender" />
        <h4>{date}</h4>
        </div>

        <img src={DeleteIcon} alt="deleteicon" />
      </div>

      <div className="money-div">
        <span className="amount">
          ₦ 30,000
        </span>
      </div>

      <div className="second-div">

        <div className="left-content">
          <p className="leftcontent-p">{leftContent.name}</p>
          <div className="phonenoandcopy">
          <p className="PhoneNumber">{leftContent.phone}</p>
          <img src={CopyIcon} alt="yellow-icon" />
          </div>
        </div>

        <div className="right-content">
          <p className="leftcontent-p">{rightContent.name}</p>
          <div className="phonenoandcopy">
          <p className="PhoneNumber">{rightContent.phone}</p>
          <img src={CopyIcon} alt="yellow-icon" />
        </div>

        </div>
      </div>

      <div className="third-div">
        <div className="left-address">
          <img src={SendIcon} alt="Address" />
          <span>{address}</span>
        </div>

        <div className="right-address">
          <img src={LocationIcon} alt="Address" />
          <span>{address}</span>
        </div>
      </div>
{/* 
      <div className="button-container">
        <button className="accept-button">Details</button>
      </div> */}
    </div>
  );
}

export default Card;
