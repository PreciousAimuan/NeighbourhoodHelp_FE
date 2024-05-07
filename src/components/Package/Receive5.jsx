import React from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Complete from "../../assets/images/Complete.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";

const Receive5 = () => {

  
  const rating = JSON.parse(localStorage.getItem('rating'))
  //const errands = JSON.parse(localStorage.getItem('errands'))
  const agent = JSON.parse(localStorage.getItem('agent'));
  console.log(agent)
  console.log("i'm active")
  //console.log(agent)
  //console.log(errands.$values[0].id)
  // console.log(agent.errands.$values[0].agent.appUser.firstName)
  
  return (
    <div>
      <div className="back">
        <img src={Arrow} alt="left-arrow" />
        <span><Link to={'/receive/4'}>Back</Link></span>
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
          <div className="package-info-2">
            <img src={Complete} alt="complete" />
            <div className="note">Package Sent Successfully!</div>
            <div className="more-note">
              Your package has been scheduled for pickup. Our trusted agent {agent.firstName + " " + agent.lastName} will be on their
              <br />
              way to collect your package, contact our agent via <span style={{fontSize: "18px", fontWeight: "500"}}>{agent.phoneNumber}</span> and <span style={{fontSize: "18px", fontWeight: "500"}}>{agent.email}</span>. <br/>
              Thank you for choosing Neighbourhood Help for your
              delivery needs!
            </div>
            <div className="homepage-btn">
              <button
                className="prev-button"
                onClick={() => {
                  window.location.href = "/user-dashboard";
                   localStorage.removeItem('receiveData1');
                    localStorage.removeItem('receiveData2');
                    localStorage.removeItem('receiveData3');
                }}
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReceiveLoader bulletColors={["#000080", "#000080", "#000080", "#000080"]} lineColors={["#000080", "#000080", "#000080", "#EFF0F6"]} />
    </div>
  );
};

export default Receive5;