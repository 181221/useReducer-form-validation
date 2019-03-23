import { useReducer } from "react";
import useFormInput from "./useFormInput";
import reducer, { actions } from "../reducers/reducer";

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
    dispatch({ type: actions.SUBMIT, form: e.target });
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
