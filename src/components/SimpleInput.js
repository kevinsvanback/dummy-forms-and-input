import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const nameInputRef = useRef();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);

    if (enteredName === '') {
      setEnteredNameIsValid(false);
      return;
    } else {
      setEnteredNameIsValid(true);
    }

    const nameInputRefValue = nameInputRef.current.value;

    console.log(enteredName);
    console.log(nameInputRefValue);
  };

  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;
  const nameInputCssClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const nameInputErrorMessage = nameInputIsInvalid && <p className='error-text'>Name cannot be empty.</p>;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputCssClasses} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} ref={nameInputRef} />
        {nameInputErrorMessage}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
