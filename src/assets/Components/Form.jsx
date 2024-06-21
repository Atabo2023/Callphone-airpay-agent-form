// import Navbar from "./Navbar";
import Heading from "./Heading";
import { useFormik } from "formik";
import App from "../../App";
// import anxios from "anxios";
import React, { useState, useRef, useEffect } from "react";

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

  // const handlekeyDown = e;

  // getcountry= () => {
  //   anxios.get (https://nigeria-states-towns-lga.onrender.com/api/all).then
  // }

  return (
    <>
      <div className="row">
        <div className="card">
          <div className="column1">
            <div className="AgentsTerms">
              <li className="terms">
                To express insterest either identify yourself as a potential
                agent or reach out to us through contact form
              </li>
              <li>
                Ensure that your business location is valid and visible, with
                current foot traffic pr patronage, whether rented or owned.
              </li>
              <li>
                Provide persional and business data to fill out our agent
                registration form
              </li>
              <li>
                Provide copies of proof of ID, proof of address(utility bill),
                signed guarantors form, signed agency agreement form
              </li>

              <h2 className="heading">TERMS AND CONDITIONS</h2>
              <li>
                Terminals are deployed nwith three month's and will be retrieved
                after one month of poor usage.
              </li>
              <li>
                Agents are required to do a minimum of 20 card transaction
                valued at a minimum total of two hundred thousand naira only
                daily.
              </li>
              <li>
                transactions are settled directly into agents' airpay wallent
                instantly
              </li>
              <li>
                Terminal/accessories/Sim cards are not to be used for
                fradulent/money laundering transactionsand merchants are liable
                for any losses due to such activity
              </li>
              <li>
                The agent is liable for any damange to the terminal/unauthorized
                use of Sim card in the terminal/usage of charge not issued by
                Callphone and or charging with a generator.
              </li>
              <li>
                Callphone limited is not liable for any loss or damage caused by
                transactions failure by third parties in the processing cycle
              </li>
              <li>
                Agent is liable for the cost of replacement of the terminal and
                accessories where it is lost or maliciously damaged.
              </li>
              <li>
                Callphone reserve the right of set-off from settlement of
                transaction
              </li>
              <li>
                If the terminal and accessory is not returned at retrieval
                request; Callphone reserve the right to charge merchant value of
                asset for replacement
              </li>
              <li>
                An agent must be able to render financial service and should be
                able to
              </li>
              <li>
                commit a minimum working capital of 50,000 (if a non register
                business) and 250, 000 (if a Registered business)
              </li>
              <form className="conditions">
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
              </form>
            </div>
          </div>
        </div>
        {/* <div className="card1"> */}
        <div className="column2">
          <div className="form" onSubmit={handleSubmit}>
            {/* <form className="CallphoneAirpayAgentForm">
              <label htmlFor="AgentName">Agent Full Name:</label>
              <input
                type="text"
                name="AgentName"
                values={inputsRef.AgentFullName}
                onBlur={handleBlur}
                onChange={handleChange}
                onKeyDown={(handleKeyPress) => Form(inputs, "AgentFullName")}
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
              <button onClick={handleSubmit}>Submit {inputs}</button>
            </form> */}
            <form className="formBox">
              <div className="dot1">
                <p className="dot">1</p>
                <p className="border"></p>
                <p className="dot">2</p>
                <p className="border"></p>
                <p className="dot">3</p>
                {/* <div>
                  <span>2</span>
                </div>
                <p>
                  <span>3</span>
                </p> */}
              </div>
              <h3>Personal Information</h3>
              <label htmlFor="title">Last name</label>
              <br />
              <input
                className="inputField"
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
              />
              <br />
              <input
                className="inputField"
                type="text"
                id="first name"
                name="first name"
                placeholder="First name"
              />
              <label htmlFor="title">First name</label>
              <br />
              <br />
              <label htmlFor="title">Phone number</label>
              <br />
              <input
                className="inputField"
                type="text"
                id="phone number"
                name="phone number"
                placeholder="+234"
              />
              <br />
              <input
                className="inputField"
                type="text"
                id="Home address"
                name="Home address"
                placeholder="Home address"
              />
              <label htmlFor="title">Home Address</label>
              <br />
              <br />
              {/* <div></div> */}
              <input className="inputField" />
              <br />
              <label htmlFor="state">State</label>
              <select className="select">
                <option value="select state">Select State</option>
                {/* <option value="select state">kogi</option> */}
              </select>

              <br />
              <br />
              <label htmlFor="title" className="set">
                City
              </label>
              <div className="seletBox">
                <select className="inputField" id="state">
                  <option value="Select State">Select City</option>
                </select>
                {/* <br /> */}
                <br />
                <label htmlFor="title" className="LGA">
                  L.G.A
                </label>
                <select className="select" id="city">
                  <option value="Select City">Select LGA</option>

                  {/* type="text" name="city" placeholder="select" */}
                </select>
              </div>
              <br />
              {/* <select className="select" id="LGA">
                <option value="Select LGA">Select State</option>
                
                
              
              </select>
              <br /> */}
              <label htmlFor="title">BVN</label>
              <br />
              <input
                className="inputField"
                type="text"
                id="BVN"
                name="BVN"
                placeholder="BVN"
              />
              <br />
              <input
                className="inputField"
                type="text"
                id="nin"
                name="nin"
                placeholder="Nin number"
              />
              <label htmlFor="title">NIN Number</label>
              <br />
              <br />
              <label htmlFor="experince">
                Do you have previous experience of agency banking:
              </label>
              <br />
              <select className="input" id="LGA">
                <option value="Select LGA">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <button onClick={handleSubmit}>Next</button>
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
