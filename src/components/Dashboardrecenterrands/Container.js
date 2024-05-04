// Container.js
import React from "react";
import Card from "./Card";
import "./Dashboardrecenterrands.css";
import Pointer from './assets/Group 7298.png'

function Container({ preDivText, cardsData }) {
  return (
    <div className="whole-container">
      <div className="pre-div">
        <img src={Pointer} alt="Nearest errands" />
        <h2>{preDivText}</h2>
      </div>

      <div className="card-container">
        {cardsData.map((cardData, index) => (
          <Card key={index} data={cardData} />
        ))}
      </div>
    </div>
  );
}

export default Container;
