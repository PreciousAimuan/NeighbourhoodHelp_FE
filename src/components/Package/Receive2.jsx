import React, { useState, useEffect } from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Location from "../../assets/images/location.png";
//import Flag from "../../assets/images/flag.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";
import Input, {SelectInput } from "./Input";

const Receive2 = () => {

  const [receiveData2, setReceiveData2] = useState({})

  const handleChange =(event) => {
    const {name, value} = event.target

    setReceiveData2({
      ...receiveData2, [name]:value
    })

    console.log(receiveData2)
  }

  useEffect(() => {
    localStorage.setItem('receiveData2', JSON.stringify(receiveData2))
  }, [receiveData2])

  //List of Nigerian states
  const nigerianStates = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
    "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
    "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja"
  ];


  return (
    <div>
      <div className="back">
        <img src={Arrow} alt="left-arrow" />
        <span>
          <Link to={"/receive/"}>Back</Link>
        </span>
      </div>

      <div className="containers">
        <div className="ReceiveText">
          <div className="bold-text">Create an errand</div>
          <div className="receive-note">
            <div className="notes">
              Get your packages delivered effortlessly. Just request, and our
              reliable agents <br />
              will take care of the rest. Fast, secure, and hassle-free.
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="loader">
            <div class="bullet">
              <span>1</span>
            </div>
            <div className="line"></div>
            <div class="bullet">
              <span>2</span>
            </div>
            <div className="line"></div>
            <div class="bullet">
              <span>3</span>
            </div>
            <div className="line"></div>
            <div class="bullet">
              <span>4</span>
            </div>
          </div>
          <div className="long-line"></div>
          <div className="package-info">
            <img src={Location} alt="location" className="location" />
            <div className="actual-note-div">
              <div className="package-question">
                Provide your Pickup Location
              </div>
              <div className="actual-note">
                "Enter your pickup location to get started. Our agents are ready
                to <br />
                assist you. It's fast and easy!"
              </div>
            </div>
          </div>
          <form className="form-3">
            <div className="first-form-div">
              <SelectInput
                inputData={{
                  label: "State",
                  type: "text",
                  options: nigerianStates,
                  onChange1: handleChange,
                  name: "state",
                  placeholder: "Select a state from the list" 
                }}
              />
              <Input
                inputData={{
                  label: "Street Address",
                  type: "text",
                  placeholder: `Enter street address here`,
                  onChange: handleChange,
                  name:"street"
                }}
              />
            </div>
            <div className="second-form-div">
              <Input
                inputData={{
                  label: "City/Town",
                  type: "text",
                  placeholder: `Enter name of city or town here`,
                  onChange: handleChange,
                  name:"city"
                }}
              />
              <Input
                inputData={{
                  label: "Postal Code",
                  type: "text",
                  placeholder: `Enter postal code here`,
                  onChange: handleChange,
                  name:"postalcode"
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="step-2">
        <button
          className="prev-button"
          onClick={() => {
            window.location.href = "/receive";
          }}
        >
          Previous step
        </button>
        <button
          className="next-button"
          onClick={() => {
            window.location.href = "/receive/3";
          }}
        >
          Next step
        </button>
      </div>
      <ReceiveLoader
        bulletColors={["#000080", "#EFF0F6", "#EFF0F6", "#EFF0F6"]}
        lineColors={["#000080", "#EFF0F6", "#EFF0F6", "#EFF0F6"]}
      />
    </div>
  );
};

export default Receive2;
