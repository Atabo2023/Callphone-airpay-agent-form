import Navbar from "./Navbar";
import Heading from "./Heading";
import { useFormik } from "formik";
import App from "../../App";
// import react from "react";
import React, { useState, useRef, createRef } from "react";

const initialValues = {
  AgentFullName: "",
  Town: "",
  LGA: "",
  State: "",
  AgentBusinessName: "",
  AgentBusinessLocation: "",
  AgentsRegisteredPhoneNumber: "",
  AgentsBVNNumber: "",
  AgentsNationalIdentityNumber: "",
  TaxIdentificationNumber: "",
};

function Form() {
  const [inputs, setInputs] = useState("");

  const inputsRef = useRef({
    AgentFullName: React.createRef(),
    Town: React.createRef(),
    LGA: React.createRef(),
    State: React.createRef(),
    AgentBusinessName: React.createRef(),
    AgentBusinessLocation: React.createRef(),
    AgentsRegisteredPhoneNumber: React.createRef(),
    AgentsBVNNumber: React.createRef(),
    AgentsNationalIdentityNumber: React.createRef(),
    TaxIdentificationNumber: React.createRef(),
  });

  const handleKeyPress = (event, inputName) => {
    if (event.key === "Enter") {
      const nextInputName = getNextInputName(inputName);
      if (nextInputName) {
        inputsRef.current[nextInputName].focus();
        console.log(handleKeyPress);
      }
      // event.preventDefault();
      // if (initialValues && initialValues.current) {
      //   initialValues.current.focus();
      //   setInputValue("");
      // }
      // // Trigger next action here
      // console.log(`Enter key Pressed!, next action triggered ${inputValue}`);
      // setInputValue("");
    }
    // console.log(handleKeyPress);
  };

  const getNextInputName = (currentInpiutName) => {
    const inputNames = Object.keys(inputs);
  };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      console.log(values);
    },
  });
  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("Enter key ScriptProcessorNode, net action triggered");
  //   }
  // };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //   console.log("Enter key ScriptProcessorNode, net action triggered")
  // }
  // };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // }

  // const handlekeyDown = e;

  return (
    <>
      <div className="row">
        <div className="column1">
          <div className="AgentsTerms">
            <p className="terms">
              To express insterest either identify yourself as a potential agent
              or reach out to us through contact form
            </p>
            <p>
              Ensure that your business location is valid and visible, with
              current foot traffic pr patronage, whether rented or owned.
            </p>
            <p>
              Provide persional and business data to fill out our agent
              registration form
            </p>
            <p>
              Provide copies of proof of ID, proof of address(utility bill),
              signed guarantors form, signed agency agreement form
            </p>

            <h2>TERMS AND CONDITIONS</h2>
            <p>
              Terminals are deployed nwith three month's and will be retrieved
              after one month of poor usage.
            </p>
            <p>
              Agents are required to do a minimum of 20 card transaction valued
              at a minimum total of two hundred thousand naira only daily.
            </p>
            <p>
              transactions are settled directly into agents' airpay wallent
              instantly
            </p>
            <p>
              Terminal/accessories/Sim cards are not to be used for
              fradulent/money laundering transactionsand merchants are liable
              for any losses due to such activity
            </p>
            <p>
              The agent is liable for any damange to the terminal/unauthorized
              use of Sim card in the terminal/usage of charge not issued by
              Callphone and or charging with a generator.
            </p>
            <p>
              Callphone limited is not liable for any loss or damage caused by
              transactions failure by third parties in the processing cycle
            </p>
            <p>
              Agent is liable for the cost of replacement of the terminal and
              accessories where it is lost or maliciously damaged.
            </p>
            <p>
              Callphone reserve the right of set-off from settlement of
              transaction
            </p>
            <p>
              If the terminal and accessory is not returned at retrieval
              request; Callphone reserve the right to charge merchant value of
              asset for replacement
            </p>
            <form>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value="condition"
              />
              <label htmlFor="terms">
                {" "}
                I agreed to the terms and conditions
              </label>
              <br></br>
              {/* <input type="text" /> */}
            </form>
            {/* <input>
              type="checkbox"
              <label> I agreed with the term and conditions </label>
            </input> */}
            <p></p>
          </div>
        </div>

        <div className="column2">
          <div className="form" onSubmit={handleSubmit}>
            <form className="CallphoneAirpayAgentForm">
              <label htmlFor="AgentName">Agent Full Name:</label>
              <input
                type="text"
                name="AgentName"
                values={inputsRef.AgentFullName}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={(handleKeyPress) => Form(event, "AgentFullName")}
                ref={inputsRef.current.AgentFullName}
              />

              <label htmlFor="AgentName">Town:</label>
              <input
                type="text"
                npm
                name="AgentName"
                values={values.Town}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />

              <label htmlFor="AgentName">LGA:</label>
              <input
                type="text"
                name="AgentName"
                values={values.LGA}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
              />

              <label htmlFor="AgentName">State:</label>
              <input
                type="text"
                name="AgentName"
                values={values.State}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label htmlFor="AgentName">Agent Business Name:</label>
              <input
                type="text"
                name="AgentName"
                values={values.AgentBusinessName}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <label htmlFor="AgentName">Agent's Business Location:</label>
              <input
                type="text"
                name="AgentName"
                values={values.AgentBusinessLocation}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <label htmlFor="AgentName">
                Agent's Registered Phone Number:
              </label>
              <input
                type="number"
                maxLength="11"
                name="AgentName"
                values={values.AgentsRegisteredPhoneNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label htmlFor="AgentName">Agent's BVN Number:</label>
              <input
                type="BVN"
                maxLength="11"
                name="AgentName"
                values={values.AgentsBVNNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <label htmlFor="AgentName">
                Agents National Identity Number:
              </label>
              <input
                type="number"
                maxLength="15"
                name="AgentName"
                values={values.AgentsNationalIdentityNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label htmlFor="AgentName">Tax Identification Number(TIN):</label>
              <input
                type="text"
                name="AgentName"
                values={values.TaxIdentificationNumber}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default Form;

// function Form() {
//   const [inputValue, setInputValue] = useState("");
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       if (initialValues && initialValues.current) {
//         initialValues.current.focus();
