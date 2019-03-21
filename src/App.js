import React, { Component, useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

const reducer = (state, { el, type, form }) => {
  switch (type) {
    case "name": {
      if (el === "123") {
        return {
          ...state,
          navnFeilmelding: "navn kan ikke være null",
          isValid: false
        };
      } else if (el === "") {
        return {
          ...state,
          navnFeilmelding: "navn kan ikke være null",
          isValid: false
        };
      }

      return { ...state, navnFeilmelding: "" };
    }
    case "email": {
      if (el === "") {
        return {
          ...state,
          emailFeilmelding: "email kan ikke være null",
          isValid: false
        };
      }
      return { ...state, emailFeilmelding: "" };
    }
    case "password": {
      if (el === "") {
        return {
          ...state,
          passwordFeilmelding: "password kan ikke være null",
          isValid: false
        };
      }
      return { ...state, passwordFeilmelding: "" };
    }
    case "SUBMIT": {
      console.log("state", state);
      console.log("isValid", state.isValid);
      if (!state.isValid) {
        return { ...state, isValid: true };
      } else {
        console.log("form", form);
        form.submit();
      }
    }
    default: {
      return state;
    }
  }
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
  let feilmeldinger = {
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
