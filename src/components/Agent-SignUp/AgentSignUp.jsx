import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AgentSignUp.css";
import axios from "axios";

function AgentSignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    NIN: "",
    DateOfBirth: "",
    document: null, // Assuming document is a file object
    postalCode: "",
  });

  const [errors, setErrors] = useState({
    NIN: "",
    DateOfBirth: "",
    document: "",
    postalCode: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ensure DOB is always stored as a string
    const formattedValue = name === "DateOfBirth" ? String(value) : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: formattedValue,
    }));
    validateField(name, formattedValue);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      document: file,
    }));
    // You can perform additional validation or processing here if needed
  };

  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "NIN":
        errorMessage = value.length !== 11 ? "NIN must be 11 digits" : "";
        break;
      case "DateOfBirth":
        const dobRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
        errorMessage = !dobRegex.test(value)
          ? "Enter a valid date (dd/mm/yyyy)"
          : "";
        break;
      case "document":
        errorMessage = ""; // For demonstration, no validation implemented yet
        break;
      case "postalCode":
        errorMessage = !value.match(/^[0-9]{5}([- ]?[0-9]{4})?$/)
          ? "Invalid postal code"
          : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const id = localStorage.getItem("userId");

    try {
      const formDataObj = new FormData();
      formDataObj.append("NIN", formData.NIN);
      formDataObj.append("DateOfBirth", formData.DateOfBirth);
      formDataObj.append("postalCode", formData.postalCode);
      formDataObj.append("document", formData.document);

      const response = await axios.patch(
        `https://localhost:7198/api/Agent/create-agent?id=${id}`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Agent profile updated successfully:", response.data);
      alert("Agent profile set up successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error setting up agent profile:", error);
      alert("Agent profile set up failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="AgentForm">
      <h3 className="title">
        Hang On Tight, Hero! Let's Tweak Your Super Agent Profile!
      </h3>
      <form onSubmit={handleSubmit} className="form1-container">
        <div className="form1-row-1">
          <div className="form1-col-1-1">
            <label htmlFor="NIN" className="lfn roboto-regular">
              National Identity Number (NIN)
            </label>
            <input
              className="fn1"
              type="number"
              id="NIN"
              name="NIN"
              placeholder="Enter your NIN here"
              value={formData.NIN}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.NIN}</span>
          </div>

          <div className="form1-col-1-2">
            <label htmlFor="DateOfBirth" className="lln roboto-regular">
              Date of Birth (DOB)
            </label>
            <input
              className="ln1"
              type="date"
              id="DateOfBirth"
              placeholder="dd/mm/yyyy"
              name="DateOfBirth"
              value={formData.DateOfBirth}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.DateOfBirth}</span>
          </div>
        </div>
        <div className="form1-row-2">
          <div className="form1-col-2-1">
            <label htmlFor="document" className="eln roboto-regular">
             Recent Utility bill
            </label>
            <input
              className="ein1"
              type="file"
              id="document"
              name="document"
              onChange={handleFileChange}
              required
            />
            <span className="error">{errors.document}</span>
          </div>
          <div className="form1-col-2-2">
            <label htmlFor="postalCode" className="pln roboto-regular">
              Postal Code
            </label>
            <input
              className="pin1"
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Enter postal code here"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <span className="error">{errors.postalCode}</span>
          </div>
        </div>
        <div className="btn-Container">
          <button type="submit" className="btn">
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AgentSignUp;
