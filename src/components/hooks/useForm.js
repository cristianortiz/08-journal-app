import { useState } from "react";

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  //to reset a form
  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
