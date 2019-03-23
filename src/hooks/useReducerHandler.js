import { useReducer } from "react";
import reducer, { actions } from "../reducers/reducer";

const useReducerHandler = initalState => {
  const [
    { nameFeilmelding, passwordFeilmelding, emailFeilmelding },
    dispatch
  ] = useReducer(reducer, initalState);

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
    dispatch,
    nameFeilmelding,
    passwordFeilmelding,
    emailFeilmelding
  };

  return [handleSubmit, state];
};
export default useReducerHandler;
