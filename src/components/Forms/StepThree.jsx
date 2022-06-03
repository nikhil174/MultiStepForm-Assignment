import React, { useState } from "react";
import validator from "validator";

const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      !validator.isNumeric(values.creditcard) ||
      values.creditcard.length !== 16 ||
      values.cvv.length !== 3 ||
      !validator.isNumeric(values.cvv) ||
      validator.isEmpty(values.expiration)
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
          <label>Credit Card</label>
          <input
            name="creditcard"
            defaultValue={values.creditcard}
            type="text"
            placeholder=""
            onChange={handleFormData("creditcard")}
          />
          {error && <span>credit card is of 16 numbers.</span>}
        </div>
        <div className="form__control">
          <label>CVV</label>
          <input
            name="cvv"
            defaultValue={values.cvv}
            type="text"
            placeholder="cvv"
            onChange={handleFormData("cvv")}
          />
          {error && <span>CVV is of 3 numbers.</span>}
        </div>
        <div className="form__control">
          <label>Expiration Date</label>
          <input
            name="expiration"
            defaultValue={values.expiration}
            type="date"
            placeholder="dd/mm/yy"
            onChange={handleFormData("expiration")}
          />
          {error && <span>This field is required.</span>}
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
