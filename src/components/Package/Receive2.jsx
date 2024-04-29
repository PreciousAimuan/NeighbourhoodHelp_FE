import React, { useState, useEffect } from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Location from "../../assets/images/location.png";
import Flag from "../../assets/images/flag.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";
import { Input } from "./Receive";

const Receive2 = () => {
  const [selectedFlag, setSelectedFlag] = useState(Flag);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "NGN") {
      setSelectedFlag(Flag);
    } else if (selectedValue === "GHN") {
      setSelectedFlag(Arrow);
    }
  };

  const [receiveData2, setReceiveData2] = useState({})

  const handleChange =(e) => {
    const {name, value} = e.target

    setReceiveData2({
      ...receiveData2, [name]:value
    })

    console.log(receiveData2)
  }

  useEffect(() => {
    localStorage.setItem('receiveData2', JSON.stringify(receiveData2))
  }, [receiveData2])

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
                Provide the Pickup Location and Time
              </div>
              <div className="actual-note">
                "Enter your pickup location to get started. Our agents are ready
                to <br />
                assist you. It's fast and easy!"
              </div>
            </div>
          </div>
          <div className="form-3">
            <div className="first-form-div">
              {/* <div className="first-input">
                <span className="first-word">Name of Sender</span>
                <div className="frame">
                  <div className="input-field">
                    <div className="select">
                      <input
                        className="my-input-2"
                        placeholder={`Enter Here`}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <Input
                inputData={{
                  label: "Name of Sender",
                  placeholder: `Enter Here`,
                  onChange: handleChange,
                  name:"userid"
                }}
              /> */}

              <Input
                inputData={{
                  label: "Street Address",
                  placeholder: `Enter Here`,
                  onChange: handleChange,
                  name:"street"
                }}
              />

              <Input
                inputData={{
                  label: "State",
                  placeholder: `Enter Here`,
                  onChange: handleChange,
                  name:"state"
                }}
              />
              {/* <div className="second-input">
                <span className="second-word">Street Address</span>
                <div className="frame">
                  <div className="input-field">
                    <input className="my-input-3" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div> */}
              {/* <div className="third-input">
                <span className="third-word">State</span>
                <div className="frame">
                  <div className="input-field-2">
                    <input className="my-input" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div>
              <div className="third-input">
                <span className="third-word">Postal Code</span>
                <div className="frame">
                  <div className="input-field-2">
                    <input className="my-input" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="second-form-div">
              {/* <div className="first-input">
                <span className="first-word">Sender’s Phone</span>
                <div className="frame">
                  <div className="input-field">
                    <img
                      src={selectedFlag}
                      alt="flag"
                      onClick={() => setSelectedFlag(Flag)}
                    />
                    <select
                      className="input-field-selector"
                      style={{ cursor: "pointer" }}
                      onChange={handleSelectChange}
                    >
                      <option value="NGN">NGN</option>
                      <option value="GHN">GHN</option>
                    </select>
                    <input className="my-input" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div> */}
              <Input
                inputData={{
                  label: "City/Town",
                  placeholder: `Enter Here`,
                  onChange: handleChange,
                  name:"city"
                }}
              />
              <Input
                inputData={{
                  label: "Postal Code",
                  placeholder: `Enter Here`,
                  onChange: handleChange,
                  name:"postalcode"
                }}
              />
              {/* <div className="second-input">
                <span className="second-word">City/Town</span>
                <div className="frame">
                  <div className="input-field-2">
                    <input className="my-input" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div> */}
              {/* <div className="third-input">
                <span className="third-word">Postal Code</span>
                <div className="frame">
                  <div className="input-field-2">
                    <input className="my-input" placeholder={`Enter Here`} />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
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
