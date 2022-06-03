import "./App.css";
import StepOne from "./components/Forms/StepOne";
import { useState } from "react";
import StepTwo from "./components/Forms/StepTwo";
import StepThree from "./components/Forms/StepThree";
import Final from "./components/Forms/Final";

function App() {
  const initialData = {
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
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [input]: e.target.value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <div className="app">
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );

    case 2:
      return (
        <div className="app">
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className="app">
          <StepThree
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );

    case 4:
      return (
        <div className="app">
          <Final
            setStep={setStep}
            setFormData={setFormData}
            values={formData}
          />
        </div>
      );

    default:
      return <div className="app"></div>;
  }
}

export default App;
