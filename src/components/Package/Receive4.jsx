import React from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Card from '../../assets/images/Card.png'
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";

const Receive4 = () => {
  return (
    <div>
      <div className="back">
        <img src={Arrow} alt="left-arrow" />
        <span><Link to={'/receive/3'}>Back</Link></span>
      </div>

      <div className="containers">
        <div className="ReceiveText">
          <div className="bold-text">Receive a Package?</div>
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
            <img src={Card} alt="cool-card" className="cool-card" />
            <div className="actual-note-div">
              <div className="package-question">
                Make an Offer
              </div>
              <div className="actual-note">
              "Propose your price. Tell us the amount you're willing to pay and let's <br/>
              negotiate."
              </div>
            </div>
          </div>
          <div className="form-2">
            <div className="first-form-div">
              <div className="first-input">
                <span className="first-word">Amount</span>
                <div className="frame">
                  <div className="input-field-3">
                    <div className="space">
                      <input className="my-input"
                        placeholder={`Enter Here`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step-2">
        <button
          className="prev-button"
          onClick={() => {
            window.location.href = "/receive/3";
          }}
        >
          Previous step
        </button>
        <button
          className="next-button"
          onClick={() => {
            window.location.href = "/receive/5";
          }}
        >
          Next step
        </button>
      </div>
      <ReceiveLoader bulletColors={["#000080", "#000080", "#000080", "#EFF0F6"]} lineColors={["#000080", "#000080", "#000080", "#EFF0F6"]} />
    </div>
  );
};

export default Receive4;
