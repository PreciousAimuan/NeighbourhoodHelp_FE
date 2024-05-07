import React, {useState, useEffect} from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Plane from "../../assets/images/Plane.png";
import Calendar from "../../assets/images/calendar.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";
import Input from "./Input";

const Receive3 = () => {

  const [receiveData3, setReceiveData3] = useState({})

  const handleChange =(event) => {
    const {name, value} = event.target

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
                What day is your expected delivery date?
              </div>
              <div className="actual-note">
                “Please provide the delivery date. Thanks!”
              </div>
            </div>
          </div>
          <div className="form-3">
            <div className="second-form-div">
            <Input
                inputData={{
                  label: "Delivery Date",
                  type: "Date",
                  placeholder: `Enter expected delivery date`,
                  onChange: handleChange,
                  src:Calendar,
                  name:"date"
                }}
              />
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
