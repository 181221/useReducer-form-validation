import React from "react";
import { validatorUtil } from "./validator";
import useReducerHandler from "./hooks/hooks";
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

const Form = () => {
  const [
    handleSubmit,
    {
      name,
      email,
      password,
      nameFeilmelding,
      passwordFeilmelding,
      emailFeilmelding
    }
  ] = useReducerHandler(initalState);
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
