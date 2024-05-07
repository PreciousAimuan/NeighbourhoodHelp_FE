import React from "react";

const Input = ({ inputData }) => {

  const { label, name, type, placeholder, value, onChange } = inputData;
  
  return (
    <div className="first-input">
      <label className="second-word">{label} </label>
      <div className="input-field">
        <input
          className="my-input"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;


export const SelectInput = ({ inputData }) => {

  const {name, label, options, onChange1, placeholder } = inputData;

  return (
    <div className="first-input">
      <label className="second-word">{label}</label>
      <div className="input-field">
        <select className="input-field-selector my-input-2" onChange={onChange1} name={name} >
          { <option>{placeholder}</option>}
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};


export const SelectWithInput = ({ inputData }) => {

  const {name, type, label, options, onChange1, onChange2, placeholder} = inputData;

  return (
    <div className="first-input">
      <label className="second-word">{label}</label>
      <div className="input-field">
        <select className="input-field-selector" onChange={onChange1}>
          {options.map((item) => (
            <option value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          className="my-input-3"
          type={type}
          placeholder={placeholder}
          onChange={onChange2}
          name={name}
        />
      </div>
    </div>
  );
};

