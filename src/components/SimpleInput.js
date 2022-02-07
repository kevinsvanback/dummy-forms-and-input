import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailisValid = enteredEmail.trim().includes('@');
  const nameInputIsInvalid = enteredNameIsTouched && !enteredNameIsValid;
  const emailInputIsInvalid = enteredEmailIsTouched && !enteredEmailisValid;
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailisValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmail) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
    setEnteredName('');
    setEnteredEmail('');
    formIsValid = false;
  };

  const nameInputCssClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const emailInputCssClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';
  const nameInputErrorMessage = nameInputIsInvalid && <p className='error-text'>Name cannot be empty.</p>;
  const emailInputErrorMessage = emailInputIsInvalid && <p className='error-text'>Email must contain @.</p>;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputCssClasses} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputErrorMessage}
      </div>
      <div className={emailInputCssClasses} >
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailInputErrorMessage}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
