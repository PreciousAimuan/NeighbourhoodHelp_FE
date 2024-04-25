import React from "react";
import { useState } from "react";
import "./AgentSignUp.css";
import { Link } from "react-router-dom";

function AgentSignUp() {
  const [formData, setFormData] = useState({
    NIN: "",
    DateOfBirth: "",
    document: "",
    postalCode:"",
    
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="AgentForm">
        <h3 className="title">
           Hang On Tight, Hero! Let's Tweak Your Super Agent Profile!
       </h3>
       <form action="" className="form1-container">
            <div className="form1-row-1">
       
                <div className="form1-col-1-1">
                 <label htmlFor="NIN" className='lfn roboto-regular'>National Identity Number (NIN)</label>
                    <input
                        className='fn1'
                        type="text"
                        id="NIN"
                        name="NIN"
                        value={formData.NIN}
                        onChange={handleChange}
                        pattern="[0-9]{11}" // Adjust the pattern based on your NIN format
                        title="Please enter a valid NIN (11 digits)." // Displayed when the input doesn't match the pattern
                        required // Makes the input field required
                        style={{ fontSize: '16px', paddingLeft: '10px' }}
                    />
                </div>
             
                <div className="form1-col-1-2">
                    <label htmlFor="dob" className='lln roboto-regular'>Date of Birth (DOB)</label>
                    <input
                        className='ln1'
                        type="text"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        pattern="\d{2}/\d{2}/\d{4}" // Pattern for dd/mm/yyyy format, adjust as needed
                        placeholder="dd/mm/yyyy" // Placeholder for the input pattern
                        title="Please enter a valid date of birth in the format dd/mm/yyyy." // Displayed when the input doesn't match the pattern
                        required // Makes the input field required
                        style={{ fontSize: '16px', paddingLeft: '10px' }}
                     />
                </div>

            </div>
            <div className="form1-row-2">
                <div className="form1-col-2-1">
                    <label htmlFor="document" className='eln roboto-regular'>Document to Upload</label>
                    <input
                        className='ein1'
                        type="file" // Change the input type to file for uploading documents
                        id="document"
                        name="document"
                        onChange={handleChange} // Handle file selection event
                        accept=".pdf, .doc, .docx" // Specify accepted file types
                        required // Makes the input field required
                        style={{ fontSize: '12px', paddingLeft: '10px'}}
                    />
                    
                
                </div>
                <div className="form1-col-2-2">
                     <label htmlFor="postalcode" className='pln roboto-regular'>Postal Code</label>
                        <input
                            className='pin1'
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            pattern="[0-9]{5}([- ]?[0-9]{4})?"
                            title="Please enter a valid postal code"
                        />
                </div>
            </div>
            <Link to='/test'><div className="btn-Container">
                    <button type="submit" className='btn'>
                        <span>Click here</span> {/* Text */}
                        <span>&rarr;</span> {/* Unicode character for right arrow */}
                    </button>
                </div></Link>

        </form>


    </div>
  );
}
export default AgentSignUp;
