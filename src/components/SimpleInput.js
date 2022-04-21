import useInput from '../hooks/useInput';

const SimpleInput = () => {
  const { enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    valueInputIsInvalid: nameInputIsInvalid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput } = useInput(value => value.trim() !== '');

  const { enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailisValid,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput } = useInput(value => value.trim().includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailisValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmail) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();

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
        <input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailInputErrorMessage}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
