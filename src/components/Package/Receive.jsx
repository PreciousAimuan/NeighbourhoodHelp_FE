import React, { useState, useEffect } from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Box from "../../assets/images/Box.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Receive = () => {
  // const [size1, setSize1] = useState("inches");
  const [size2, setSize2] = useState("kg");
  // const [size3, setSize3] = useState("inches");
  const [receiveData1, setReceiveData1] = useState({})

  const handleChange =(e) => {
    const {name, value} = e.target

    setReceiveData1({
      ...receiveData1, [name]:value
    })

    console.log(receiveData1)
  }

  // const history = useHistory();
  // const goBack = () => {
  //   history.goBack(); // Redirects to the previous page in history
  // };

  useEffect(() => {
    localStorage.setItem('receiveData1', JSON.stringify(receiveData1))
  }, [receiveData1])
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
              {/* <div className="first-input">
                <span className="first-word">Height of Package</span>
                <div className="frame">
                  <div className="input-field">
                    <div className="select">
                      <select
                        className="input-field-selector"
                        onChange={(e) => setSize1(e.target.value)}
                      >
                        <option>Inches</option>
                        <option>cm</option>
                        <option>ft</option>
                      </select>
                    </div>
                    <input className="my-input-2"
                      placeholder={`Height in ${size1}`}  
                    />
                  </div>
                </div>
              </div> */}

              {/* <div className="second-input">
                <span className="second-word">Weight of Package</span>
                <div className="frame">
                  <div className="input-field">
                    <div className="select">
                      <select
                        className="input-field-selector"
                        onChange={(e) => setSize2(e.target.value)}
                      >
                        <option>Kg</option>
                        <option>Ibs</option>
                      </select>
                    </div>
                    <input className="my-input-3"
                      placeholder={`Weight in ${size2}`}
                    />
                  </div>
                </div>
              </div> */}
              <SelectInput
                inputData={{
                  label: "Weight of Package",
                  options: ["Kg", "Ibs"],
                  onChange1: (e) => setSize2(e.target.value),
                  onChange2: handleChange,
                  placeholder: `Weight in ${size2}`,
                  name:"weight"
                }}
              />
              <Input
                inputData={{
                  label: "Item",
                  placeholder: `Enter Here`,
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
                  placeholder: `Enter Here`,
                  onChange: handleChange,
                  name:"quantity"
                }}
              />
              <Input
                inputData={{
                  label: "Additional Note",
                  placeholder: `share extra details`,
                  onChange: handleChange,
                  name:"note"
                }}
              />
              {/* <div className="first-input">
                <span className="first-word">Width of Package</span>
                <div className="frame">
                  <div className="input-field">
                    <div>
                      <select
                        className="input-field-selector"
                        onChange={(e) => setSize3(e.target.value)}
                      >
                        <option>Inches</option>
                        <option>cm</option>
                        <option>ft</option>
                      </select>
                    </div>
                    <input className="my-input-2"
                      placeholder={`Width in ${size3}`}
                    />
                  </div>
                </div>
              </div> */}
              {/* <div className="second-input">
                <span className="second-word">Quantity</span>
                <div className="frame">
                  <div className="input-field-2">
                    <input className="my-input" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div> */}
              {/* <div className="third-input">
                <span className="third-word">Additional Note</span>
                <div className="frame">
                  <div className="input-field-2">
                    <input
                      className="my-input"
                      placeholder={`share any extra details or instructions`}
                    />
                  </div>
                </div>
              </div> */}
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

export const SelectInput = ({ inputData }) => {
  const {name, label, options, onChange1, onChange2, placeholder } = inputData;
  return (
    <div className="first-input">
      <label className="second-word">{label}</label>
      <div className="input-field">
        <select className="input-field-selector" onChange={onChange1}>
          {options.map((item) => (
            <option>{item}</option>
          ))}
        </select>
        <input
          className="my-input-3"
          placeholder={placeholder}
          onChange={onChange2}
          name={name}
        />
      </div>
    </div>
  );
};

export const Input = ({ inputData }) => {
  const { label, name, type, placeholder, value, onChange, onKeyDown, src } = inputData;
  return (
    <div className="first-input">
      <label className="second-word">{label} </label>
      <div className="input-field">
        <div className="select">
          <input
            className="my-input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>

        {src && (
          <div className="clock">
            <img src={src} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};
