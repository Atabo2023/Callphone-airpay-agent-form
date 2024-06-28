// import Navbar from "./Navbar";
import Heading from "./Heading";
import { useFormik } from "formik";
import App from "../../App";
// import Endpoint from "./Endpoint";
// import anxios from "anxios";
import React, { useState, useRef, useEffect, Component } from "react";

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

// function API() {

// }

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
        {/* <div className="card"> */}
        <div className="column1">
          <div className="AgentsTerms">
            {/* <li className="terms"> */}
            <p>
              Any adult citizen carrying out a legitimate small bussiness can
              become an agent
            </p>
            <h2 className="heading">Register in 3 steps</h2>
            <p>step 1: Provide your personal data to register</p>
            <p>step 2: Provide your business data to register</p>
            <p>
              step 1: Upload copies of proof of ID, proof of address(utility
              bill), signed guarantor form, signed agency agreement from{" "}
            </p>
            {/* <li>
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
              </li> */}

            <h2 className="heading">TERMS AND CONDITIONS</h2>
            {/* {" "} */}
            {/* <div className="Agentstern"> */}
            <p className="p">
              Terminals are deployed with three month's and will be retrieved
              after one month of poor usage.
            </p>
            <p className="p">
              Agents are required to do a minimum of 20 card transaction valued
              at a minimum total of two hundred thousand naira only daily.
            </p>
            <p className="p">
              transactions are settled directly into agents' airpay wallent
              instantly
            </p>
            <p className="p">
              Terminal/accessories/Sim cards are not to be used for
              fradulent/money laundering transactionsand merchants are liable
              for any losses due to such activity
            </p>
            <p className="p">
              The agent is liable for any damange to the terminal/unauthorized
              use of Sim card in the terminal/usage of charge not issued by
              Callphone and or charging with a generator.
            </p>
            <p className="p">
              Callphone limited is not liable for any loss or damage caused by
              transactions failure by third parties in the processing cycle
            </p>
            <p className="p">
              Agent is liable for the cost of replacement of the terminal and
              accessories where it is lost or maliciously damaged.
            </p>
            <p className="p">
              Callphone reserve the right of set-off from settlement of
              transaction
            </p>
            <p className="p">
              If the terminal and accessory is not returned at retrieval
              request; Callphone reserve the right to charge merchant value of
              asset for replacement
            </p>
            <p className="p">
              An agent must be able to render financial service and should be
              able to
            </p>
            <p className="p">
              commit a minimum working capital of 50,000 (if a non register
              business) and 250, 000 (if a Registered business)
            </p>
            {/* </div> */}
            <form className="conditions">
              <input
                className="checkbox"
                type="checkbox"
                id="terms"
                name="terms"
                value="condition"
              />
              <label htmlFor="terms" className="check">
                I agreed to the terms and conditions
              </label>
            </form>
            <div className="footer">
              <p>For more information:</p>
              <p>Please visit www.callphoneng,com email:</p>
              <p>Info@callphoneng.com or Call 09038864341</p>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* <div className="card1"> */}
        <div className="column2">
          <div className="form" onSubmit={handleSubmit}>
            <form className="CallphoneAirpayAgentForm">
              <form className="formBox">
                <div className="dot1">
                  <p className="dot">1</p>
                  <p className="border"></p>
                  <p className="dot">2</p>
                  <p className="border"></p>
                  <p className="dot">3</p>
                </div>
                <h3 className="section-2">Personal Information</h3>
                <label htmlFor="AgentName"> Last name</label>
                <input
                  type="text"
                  name="AgentName"
                  values={inputsRef.AgentFullName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Last Name"
                  onKeyDown={(handleKeyPress) => Form(inputs, "AgentFullName")}
                  ref={inputsRef.current.AgentFullName}
                />

                <label htmlFor="AgentName">First Name</label>
                <input
                  type="text"
                  npm
                  name="AgentName"
                  values={values.Town}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="First Name"
                />

                <label htmlFor="AgentName">Email address</label>
                <input
                  type="text"
                  name="AgentName"
                  values={values.LGA}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Email address"
                />

                <label htmlFor="AgentName">Phone number</label>
                <input
                  type="text"
                  name="AgentName"
                  values={values.State}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="+234"
                />
                <label htmlFor="AgentName">Home Address</label>
                <input
                  type="text"
                  name="AgentName"
                  values={values.State}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Home address"
                />
                <label htmlFor="state">State</label>
                <select className="select">
                  <option value="select state">Select State</option>
                  {/* <option value="select state">kogi</option> */}
                </select>

                <label htmlFor="title" className="set">
                  City
                </label>
                <div className="seletBox">
                  <select className="select" id="state">
                    <option value="Select State">Select City</option>
                  </select>

                  <label htmlFor="title" className="LGA">
                    L.G.A
                  </label>
                  <select className="select" id="city">
                    <option value="Select City">Select LGA</option>
                    type="text" name="city" placeholder="select"
                  </select>
                </div>

                <label htmlFor="AgentName">BVN:</label>
                <input
                  type="text"
                  name="AgentName"
                  values={values.AgentBusinessName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="BVN"
                />

                <label htmlFor="AgentName">NIN Number</label>
                <input
                  type="text"
                  name="AgentName"
                  values={values.AgentBusinessLocation}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="NIN Number"
                />

                <label htmlFor="experince">
                  Do you have previous experience of agency banking
                </label>
                <select className="input" id="LGA">
                  <option value="Select LGA">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <button onClick={handleSubmit}>Next</button>
                {/* <button onClick={handleSubmit}>Next</button> */}

                {/* <button onClick={handleSubmit}>Next</button> */}

                {/* <label htmlFor="AgentName">Phone number:</label>
                <input
                  type="number"
                  maxLength="11"
                  name="AgentName"
                  values={values.AgentsRegisteredPhoneNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="+234"
                />
                <label htmlFor="AgentName">Home Address:</label>
                <input
                  type="BVN"
                  maxLength="11"
                  name="AgentName"
                  values={values.AgentsBVNNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Home Address"
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
                <label htmlFor="AgentName">
                  Tax Identification Number(TIN):
                </label>
                <input
                  type="text"
                  name="AgentName"
                  values={values.TaxIdentificationNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                /> */}
                {/* <button onClick={handleSubmit}>Submit {inputs}</button> */}
              </form>
              {/* <form className="formBox">
              <div className="dot1">
                <p className="dot">1</p>
                <p className="border"></p>
                <p className="dot">2</p>
                <p className="border"></p>
                <p className="dot">3</p>
              </div> */}

              {/* <h3 className="section-2">Personal Information</h3> */}
              {/* <label htmlFor="title">Last name</label>
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
              <br /> */}
              {/* <div></div> */}
              {/* <input className="inputField" />
              <br />
              <label htmlFor="state">State</label>
              <select className="select">
                <option value="select state">Select State</option> */}
              {/* <option value="select state">kogi</option> */}
              {/* </select>
              <br />
              <br />
              <label htmlFor="title" className="set">
                City
              </label>
              <div className="seletBox">
                <select className="inputField" id="state">
                  <option value="Select State">Select City</option>
                </select> */}
              {/* <br /> */}
              {/* <br />
                <label htmlFor="title" className="LGA">
                  L.G.A
                </label>
                <select className="select" id="city">
                  <option value="Select City">Select LGA</option> */}

              {/* type="text" name="city" placeholder="select" */}
              {/* </select>
              </div>
              <br /> */}
              {/* <select className="select" id="LGA">
                <option value="Select LGA">Select State</option>
                
                
              
              </select>
              <br /> */}
              {/* <label htmlFor="title">BVN</label>
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
              <br /> */}
              {/* <label htmlFor="experince">
                Do you have previous experience of agency banking:
              </label>
              <br />
              <select className="input" id="LGA">
                <option value="Select LGA">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
//               <input
//                 className="inputField"
//                 type="text"
//                 id="surname"
//                 name="surname"
//                 placeholder="Surname"
//               />
//               <br />
//               <input
//                 className="inputField"
//                 type="text"
//                 id="first name"
//                 name="first name"
//                 placeholder="First name"
//               />
//               <label htmlFor="title">First name</label>
//               <br />
//               <br />
//               <label htmlFor="title">Phone number</label>
//               <br />
//               <input
//                 className="inputField"
//                 type="text"
//                 id="phone number"
//                 name="phone number"
//                 placeholder="+234"
//               />
//               <br />
//               <input
//                 className="inputField"
//                 type="text"
//                 id="Home address"
//                 name="Home address"
//                 placeholder="Home address"
//               />
//               <label htmlFor="title">Home Address</label>
//               <br />
//               <br />
//               {/* <div></div> */}
//               <input className="inputField" />
//               <br />
//               <label htmlFor="state">State</label>
//               <select className="select">
//                 <option value="select state">Select State</option>
//                 {/* <option value="select state">kogi</option> */}
//               </select>
//               <br />
//               <br />
//               <label htmlFor="title" className="set">
//                 City
//               </label>
//               <div className="seletBox">
//                 <select className="inputField" id="state">
//                   <option value="Select State">Select City</option>
//                 </select>
//                 {/* <br /> */}
//                 <br />
//                 <label htmlFor="title" className="LGA">
//                   L.G.A
//                 </label>
//                 <select className="select" id="city">
//                   <option value="Select City">Select LGA</option>

//                   {/* type="text" name="city" placeholder="select" */}
//                 </select>
//               </div>
//               <br />
//               {/* <select className="select" id="LGA">
//                 <option value="Select LGA">Select State</option>

//               </select>
//               <br /> */}
//               <label htmlFor="title">BVN</label>
//               <br />
//               <input
//                 className="inputField"
//                 type="text"
//                 id="BVN"
//                 name="BVN"
//                 placeholder="BVN"
//               />
//               <br />
//               <input
//                 className="inputField"
//                 type="text"
//                 id="nin"
//                 name="nin"
//                 placeholder="Nin number"
//               />
//               <label htmlFor="title">NIN Number</label>
//               <br />
//               <br />
//               <label htmlFor="experince">
//                 Do you have previous experience of agency banking:
//               </label>
//               <br />
//               <select className="input" id="LGA">
//                 <option value="Select LGA">Select</option>
//                 <option value="Yes">Yes</option>
//                 <option value="No">No</option>
//               </select>
//               <button onClick={handleSubmit}>Next</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </>
//   );
// }
// export default Form;

// function Form() {
//   const [inputValue, setInputValue] = useState("");
//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       if (initialValues && initialValues.current) {
//         initialValues.current.focus();

// echo "# Airpay-registration-form" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Atabo2023/Airpay-registration-form.git
// git push -u origin main
