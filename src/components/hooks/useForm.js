import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  //to reset a form with new values from another component or the initialState
  const reset = (newState = initialState) => {
    setValues(newState);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      //REC: the form must have name property in their inputs to let handleInputChange works
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
