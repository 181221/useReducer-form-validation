import React, { Component, useState, useReducer } from "react";
import reducer from "./reducer";
import { validatorUtil } from "./validator";
import logo from "./logo.svg";
import "./App.css";

let initalState = {
  cases: [
    { name: "name", handler: validatorUtil.nameValidator, nameFeilmelding: "" },
    {
      name: "password",
      handler: validatorUtil.passwordValidator,
      passwordFeilmelding: ""
    },
    {
      name: "email",
      handler: validatorUtil.emailValidator,
      emailFeilmelding: ""
    },
    { name: "submit", handler: validatorUtil.submit }
  ],
  isValid: true
};

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
  const [
    { nameFeilmelding, passwordFeilmelding, emailFeilmelding },
    dispatch
  ] = useReducer(reducer, initalState);

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
    dispatch({ type: "submit", form: e.target });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="name..." {...name} />
      {nameFeilmelding}
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
