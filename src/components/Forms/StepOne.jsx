import React, { useState } from "react";
import validator from "validator";
import "./form.css";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.firstName) ||
      !validator.isAlpha(values.firstName) ||
      !validator.isAlpha(values.lastName) ||
      validator.isEmpty(values.lastName) ||
      !validator.isNumeric(values.age) ||
      !validator.isEmail(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={submitFormData}>
        <div className="form__control">
          <label>First Name</label>
          <input
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFormData("firstName")}
          />
          {error && <span>first name is required and is alphabetic.</span>}
        </div>
        <div className="form__control">
          <label>Last Name</label>
          <input
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")}
          />
          {error && <span>last name is required and is alphabetic.</span>}
        </div>
        <div className="form__control">
          <label>Age</label>
          <input
            name="age"
            defaultValue={values.age}
            type="number"
            placeholder="Age"
            onChange={handleFormData("age")}
          />
          {error && <span>age is required.</span>}
        </div>
        <div className="form__control">
          <label>Email</label>
          <input
            name="email"
            defaultValue={values.email}
            type="text"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error && <span>email is not valid.</span>}
        </div>
        <div className="form__btn">
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
