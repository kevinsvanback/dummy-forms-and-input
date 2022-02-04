import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredNameIsTouched(false);
    setEnteredName('');
  };

  const nameInputCssClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const nameInputErrorMessage = nameInputIsInvalid && <p className='error-text'>Name cannot be empty.</p>;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputCssClasses} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputErrorMessage}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
