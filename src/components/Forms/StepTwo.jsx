import React, { useState } from "react";
import validator from "validator";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      !validator.isNumeric(values.code) ||
      values.code.length !== 6 ||
      !validator.isAlpha(values.city) ||
      !validator.isAlpha(values.country) ||
      !validator.isAlpha(values.state)
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
          <label>City</label>
          <input
            name="city"
            defaultValue={values.city}
            type="text"
            placeholder="city"
            onChange={handleFormData("city")}
          />
          {error && <span>city must be alphabetic.</span>}
        </div>
        <div className="form__control">
          <label>State</label>
          <input
            name="state"
            defaultValue={values.state}
            type="text"
            placeholder="state"
            onChange={handleFormData("state")}
          />
          {error && <span>state must be alphabetic with no space.</span>}
        </div>
        <div className="form__control">
          <label>Country</label>
          <input
            name="country"
            defaultValue={values.country}
            type="text"
            placeholder="country"
            onChange={handleFormData("country")}
          />
          {error && <span>country must be alphabetic.</span>}
        </div>
        <div className="form__control">
          <label>Postal Code</label>
          <input
            name="postal code"
            defaultValue={values.code}
            type="text"
            placeholder="postal code"
            onChange={handleFormData("code")}
          />
          {error && <span>postal code must be of 6 numbers.</span>}
        </div>
        <div className="form__btn">
          <button onClick={prevStep}>Previous</button>
          <div style={{ width: "20px" }}></div>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
