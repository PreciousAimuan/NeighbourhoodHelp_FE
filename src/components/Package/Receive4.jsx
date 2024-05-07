import React, { useEffect, useState } from "react";
import "../Package/Receive.css";
import Arrow from "../../assets/images/arrow-left.png";
import Card from "../../assets/images/Card.png";
import ReceiveLoader from "./ReceiveLoader";
import { Link } from "react-router-dom";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Receive4 = () => {
  const [receiveData4, setReceiveData4] = useState({});
  const [errandCreated, setErrandCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setReceiveData4({
      ...receiveData4,
      [name]: value,
    });

    console.log(receiveData4);
  };

  const navigate = useNavigate();

  const receiveData1 = JSON.parse(localStorage.getItem("receiveData1"));
  const receiveData2 = JSON.parse(localStorage.getItem("receiveData2"));
  const receiveData3 = JSON.parse(localStorage.getItem("receiveData3"));
  const userId = localStorage.getItem("userId");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

   

      const response = await axios.post("https://localhost:7198/api/Errand/create-errand", {
        ...receiveData4,
      });

      //console.log(response.data.user.firstName)

      localStorage.setItem(
        "agent",
        JSON.stringify(response.data.user.errands.$values[0].agent.appUser)
      );
      localStorage.setItem(
        "agentId",
        JSON.stringify(response.data.user.errands.$values[0].agentId)
      );
      localStorage.setItem(
        "rating",
        JSON.stringify(response.data.user.errands.$values[0].agent.rating)
      );
      localStorage.setItem(
        "errandId",
        JSON.stringify(response.data.user.errands.$values[0].id)
      );
      localStorage.setItem(
        "userFirstname",
        JSON.stringify(response.data.user.firstName)
      );
      localStorage.setItem(
        "userLastname",
        JSON.stringify(response.data.user.lastName)
      );
      localStorage.setItem(
        "userPhoneNumber",
        JSON.stringify(response.data.user.phoneNumber)
      );
      localStorage.setItem(
        "userEmail",
        JSON.stringify(response.data.user.email)
      );
      localStorage.setItem(
        "price",
        JSON.stringify(response.data.user.errands.$values[0].price)
      );
      setErrandCreated(true);
      localStorage.setItem("errandCreated", "true");
      // console.log(response.data.user.errands.$values[0].agent.rating)
      console.log(response.data);
      // console.log(response.data.user.errands.$values[0].agent.appUser.firstName)
      // localStorage.setItem('errands', JSON.stringify(response.data.errands));
      console.log(response.data.user.errands.$values[0].id);
      console.log(response.data.user.lastName);
      console.log(response.data.user.firstName);
      console.log(response.data.user.phoneNumber);
      console.log(response.data.user.email);
      console.log(response.data.user.errands.$values[0].price);

      navigate("/receive/5");
    } catch (error) {
      alert("failure in sending errand");
      console.log(error);
    }
  };

  useEffect(() => {
    setReceiveData4({
      ...receiveData1,
      ...receiveData2,
      ...receiveData3,
      ...receiveData4,
      userId: userId,
    });
  }, [receiveData1, receiveData2, receiveData3, receiveData4, userId]);

  // localStorage.setItem(
  //   "receiveData4",
  //   JSON.stringify(response.data.user.phoneNumber)
  // );

  return (
    <div>
      <div className="back">
        <img src={Arrow} alt="left-arrow" />
        <span>
          <Link to={"/receive/3"}>Back</Link>
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
            <img src={Card} alt="cool-card" className="cool-card" />
            <div className="actual-note-div">
              <div className="package-question">Make an Offer</div>
              <div className="actual-note">
                "Propose your price. Tell us the amount you're willing to pay
                and let's <br />
                negotiate."
              </div>
            </div>
          </div>
          <div className="form-2">
            <Input
              inputData={{
                label: "Amount",
                type: "number",
                placeholder: `Amount in Naira`,
                onChange: handleChange,
                name: "price",
              }}
            />
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
            <button className="next-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
      </div>

      <ReceiveLoader
        bulletColors={["#000080", "#000080", "#000080", "#EFF0F6"]}
        lineColors={["#000080", "#000080", "#000080", "#EFF0F6"]}
      />
    </div>
  );
};

export default Receive4;