import React from "react";
import "./final.css";

const Final = ({ values, setStep, setFormData }) => {
  const {
    firstName,
    lastName,
    age,
    email,
    city,
    state,
    country,
    code,
    creditcard,
    cvv,
    expiration,
  } = values;

  const handleClick = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      city: "",
      state: "",
      country: "",
      code: "",
      creditcard: "",
      cvv: "",
      expiration: "",
    });
    setStep(1);
  };

  return (
    <div>
      <div className="container">
        <p>
          <strong>First Name : </strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name : </strong>
          {lastName}
        </p>
        <p>
          <strong>Age : </strong>
          {age}
        </p>
        <p>
          <strong>Email : </strong>
          {email}
        </p>
        <p>
          <strong>City : </strong>
          {city}
        </p>
        <p>
          <strong>State : </strong>
          {state}
        </p>
        <p>
          <strong>Country : </strong>
          {country}
        </p>
        <p>
          <strong>Credit Card : </strong>
          {creditcard}
        </p>
        <p>
          <strong>CVV : </strong>
          {cvv}
        </p>
        <p>
          <strong>Expiration Date : </strong>
          {expiration}
        </p>
        <div className="form__btn">
          <button onClick={handleClick}>homepage</button>
        </div>
      </div>
    </div>
  );
};

export default Final;
