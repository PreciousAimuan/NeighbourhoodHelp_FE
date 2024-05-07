import React, { useState, useEffect } from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Box from "../../assets/images/Box.png";
import ReceiveLoader from "./ReceiveLoader";
import Input, {SelectWithInput} from "./Input";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Receive = () => {

  const [size, setSize] = useState("kg");
  const [receiveData1, setReceiveData1] = useState({});
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setReceiveData1({
      ...receiveData1, 
      [name]:value
    });

    console.log(receiveData1)
  }

  // const history = useHistory();
  // const goBack = () => {
  //   history.goBack(); // Redirects to the previous page in history
  // };

  useEffect(() => {
    localStorage.setItem('receiveData1', JSON.stringify(receiveData1))
  }, [receiveData1]);

  return (
    <div>
      <div className="back">
        <img src={Arrow} alt="left-arrow" />
        {/* {goBack} */}
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
            <img src={Box} alt="cool-box" className="cool-box" />
            <div className="actual-note-div">
              <div className="package-question">What is in the Package?</div>
              <div className="actual-note">
                Package details offer essential insights for a personalized and
                <br />
                efficient user experience.
              </div>
            </div>
          </div>
          <div className="form-3">
            <div className="first-form-div">
              <SelectWithInput
                inputData={{
                  label: "Weight of Package",
                  options: ["kg", "lbs"],
                  onChange1: (e) => setSize(e.target.value),
                  onChange2: handleChange,
                  placeholder: `Weight in ${size}`,
                  name:"weight",
                  type: "number"
                }}
              />
              <Input
                inputData={{
                  label: "Item",
                  type: "text",
                  placeholder: `Enter name of item(s) here`,
                  onChange: handleChange,
                  name:"itemName"
                }}
              />
            </div>
            <div className="second-form-div">
              <Input
                inputData={{
                  label: "Quantity",
                  type: "number", 
                  placeholder: `Enter quantity of item(s) here`,
                  onChange: handleChange,
                  name:"quantity"
                }}
              />
              <Input
                inputData={{
                  label: "Additional Note",
                  type: "text", 
                  placeholder: `share any extra details or instructions`,
                  onChange: handleChange,
                  name:"note"
                }}
              />
            </div>
          </div>
        </div>
      </div>


      <div className="step">
        <button
          className="next-button"
          onClick={() => {
            window.location.href = "/receive/2";
          }}
        >
          Next step
        </button>
      </div>

      <ReceiveLoader
        bulletColors={["#000080", "#EFF0F6", "#EFF0F6", "#EFF0F6"]}
        lineColors={["#EFF0F6", "#EFF0F6", "#EFF0F6", "#EFF0F6"]}
      />
    </div>
  );
};

export default Receive;


