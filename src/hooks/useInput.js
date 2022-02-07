import { useState } from "react";

const useInput = (valueFn) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const enteredValueIsValid = valueFn(enteredValue);
  const valueInputIsInvalid = enteredValueIsTouched && !enteredValueIsValid;

  const valueInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueInputBlurHandler = () => {
    setEnteredValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setEnteredValueIsTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    valueInputIsInvalid,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset
  };
};

export default useInput;