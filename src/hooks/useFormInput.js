import { useState } from "react";

const useFormInput = (dispatch, initialValue = "") => {
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

const useFormInputHandler = dispatch => {
  const name = useFormInput(dispatch);
  const email = useFormInput(dispatch);
  const password = useFormInput(dispatch);

  return {
    name,
    email,
    password
  };
};
export default useFormInputHandler;
