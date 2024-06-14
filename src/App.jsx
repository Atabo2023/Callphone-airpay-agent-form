import React from "react";
import "./App.css";
// import Navbar from "./assets/Components/Navbar";
import Heading from "./assets/Components/Heading";
import { Formik } from "formik";
// import { Form } from "formik";
import Form from "./assets/Components/Form";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Heading />
      <Formik />
      <Form />
    </>
  );
};

export default App;
