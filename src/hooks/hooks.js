import { useState, useReducer } from "react";
import reducer from "./reducer";
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

const useReducerHandler = initalState => {
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

  const state = {
    name,
    email,
    password,
    nameFeilmelding,
    passwordFeilmelding,
    emailFeilmelding
  };

  return [handleSubmit, state];
};
export default useReducerHandler;
