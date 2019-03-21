import React, { Component, useState, useReducer } from "react";
import reducer from "./reducer";
import ValidatorUtil from "./validator";
import logo from "./logo.svg";
import "./App.css";

const useFormInput = (initialValue, dispatch) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = ({ target: { value, name } }) => {
    setValue(value);
    dispatch({ type: name, el: value });
  };

  return {
    value,
    onChange: handleChange
  };
};

const Form = () => {
  let validator = new ValidatorUtil();
  let feilmeldinger = {
    cases: [
      { name: "name", handler: validator.nameValidator },
      { name: "password", handler: validator.passwordValidator },
      { name: "email", handler: validator.emailValidator }
    ],
    navnFeilmelding: "",
    emailFeilmelding: "",
    passwordFeilmelding: "",
    isValid: true
  };
  const [
    { emailFeilmelding, passwordFeilmelding, navnFeilmelding },
    dispatch
  ] = useReducer(reducer, feilmeldinger);

  const name = useFormInput("", dispatch);
  const email = useFormInput("", dispatch);
  const password = useFormInput("", dispatch);

  const handleSubmit = e => {
    e.preventDefault();
    let elements = Array.from(e.target.children);
    elements.map(el => {
      const { name, value } = el;
      dispatch({
        type: name,
        el: value
      });
    });
    dispatch({ type: "SUBMIT", form: e.target });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="name..." {...name} />
      {navnFeilmelding}
      <input name="email" type="text" placeholder="email..." {...email} />
      {emailFeilmelding}
      <input
        name="password"
        type="password"
        placeholder="password..."
        {...password}
      />
      {passwordFeilmelding}
      <input type="submit" />
    </form>
  );
};

const App = () => {
  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
