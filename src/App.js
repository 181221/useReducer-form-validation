import React from "react";
import { validatorUtil } from "./validator";
import useReducerHandler from "./hooks/useReducerHandler";
import useFormInputHandler from "./hooks/useFormInput";
import { actions } from "./reducers/reducer";
import "./App.css";

let initalState = {
  name: {
    action: actions.NAME,
    handler: validatorUtil.name
  },
  email: {
    action: actions.EMAIL,
    handler: validatorUtil.email
  },
  password: {
    action: actions.PASSWORD,
    handler: validatorUtil.password
  },
  submit: {
    action: actions.SUBMIT,
    handler: validatorUtil.submit
  },
  isValid: true
};
const Form = () => {
  const [
    handleSubmit,
    { dispatch, nameFeilmelding, passwordFeilmelding, emailFeilmelding }
  ] = useReducerHandler(initalState);

  const { name, email, password } = useFormInputHandler(dispatch);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name={actions.NAME} type="text" placeholder="name..." {...name} />
      {nameFeilmelding}
      <input
        name={actions.EMAIL}
        type="text"
        placeholder="email..."
        {...email}
      />
      {emailFeilmelding}
      <input
        name={actions.PASSWORD}
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
