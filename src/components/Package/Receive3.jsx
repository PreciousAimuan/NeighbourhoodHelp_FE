import React, {useState, useEffect} from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Plane from "../../assets/images/Plane.png";
import Clock from "../../assets/images/clock.png";
import Calendar from "../../assets/images/calendar.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";
import { Input } from "./Receive";

const Receive3 = () => {

  const [receiveData3, setReceiveData3] = useState({})

  const handleChange =(e) => {
    const {name, value} = e.target

    setReceiveData3({
      ...receiveData3, [name]:value
    })

    console.log(receiveData3)
  }

  useEffect(() => {
    localStorage.setItem('receiveData3', JSON.stringify(receiveData3))
  }, [receiveData3])

  return (
    <div>
      <div className="back">
        <img src={Arrow} alt="left-arrow" />
        <span>
          <Link to={"/receive/2"}>Back</Link>
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
            <img src={Plane} alt="cool-plane" className="cool-plane" />
            <div className="actual-note-div">
              <div className="package-question">
                Where is the package being delivered to?
              </div>
              <div className="actual-note">
                “Please provide the delivery address and any special
                instructions for a <br />
                smooth delivery. Thanks!”
              </div>
            </div>
          </div>
          <div className="form-3">
            <div className="first-form-div">
              {/* <Input
                inputData={{
                  label: "Delivery Time",
                  placeholder: `Enter delivery time`,
                  onChange: handleChange,
                  src:Clock,
                  name:"time"
                }}
              /> */}


              {/* <div className="first-input">
                <span className="first-word">Delivery Time</span>
                <div className="frame">
                  <div className="input-field">
                    <div className="select">
                      <input
                        placeholder={`Enter Here`}
                        style={{ outline: "none", border: "none" }}
                      />
                    </div>
                    <div className="clock">
                      <img src={Clock} alt="clock" />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="second-input">
                <span className="second-word">Street Address</span>
                <div className="frame">
                  <div className="input-field">
                    <input
                      className="my-input-3"
                      placeholder={`Enter Here`}
                    />
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
              </div> */}
            </div>
            <div className="second-form-div">
            <Input
                inputData={{
                  label: "Delivery Date",
                  placeholder: `Enter delivery date`,
                  onChange: handleChange,
                  src:Calendar,
                  name:"date"
                }}
              />
              {/* <div className="first-input">
                <span className="first-word">Delivery Date</span>
                <div className="frame">
                  <div className="input-field">
                    <div className="select">
                      <input
                        placeholder={`Enter Here`}
                        style={{ outline: "none", border: "none" }}
                      />
                    </div>
                    <div className="clock">
                      <img src={Calendar} alt="calendar" />
                    </div>
                  </div>
                </div>
              </div> */}
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
            window.location.href = "/receive/2";
          }}
        >
          Previous step
        </button>
        <button
          className="next-button"
          onClick={() => {
            window.location.href = "/receive/4";
          }}
        >
          Next step
        </button>
      </div>
      <ReceiveLoader
        bulletColors={["#000080", "#000080", "#EFF0F6", "#EFF0F6"]}
        lineColors={["#000080", "#000080", "#EFF0F6", "#EFF0F6"]}
      />
    </div>
  );
};

export default Receive3;
