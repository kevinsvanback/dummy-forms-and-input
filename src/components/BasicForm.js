import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const { enteredValue: enteredFirstName,
    enteredValueIsValid: enteredFirstNameIsValid,
    valueInputIsInvalid: firstNameInputIsInvalid,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput } = useInput(value => value.trim() !== '');

  const { enteredValue: enteredLastName,
    enteredValueIsValid: enteredLastNameIsValid,
    valueInputIsInvalid: lastNameInputIsInvalid,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput } = useInput(value => value.trim() !== '');

  const { enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputIsInvalid: emailInputIsInvalid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput } = useInput(value => value.trim().includes('@'));

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameClasses = !firstNameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const lastNameClasses = !lastNameInputIsInvalid ? 'form-control' : 'form-control invalid';
  const emailClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid';

  const firstNameErrorMessage = firstNameInputIsInvalid && <p className="error-text">Please enter a valid first name</p>;
  const lastNameErrorMessage = lastNameInputIsInvalid && <p className="error-text">Please enter a valid last name</p>;
  const emailErrorMessage = emailInputIsInvalid && <p className="error-text">Please enter a valid E-mail</p>;

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameInputChangeHandler} onBlur={firstNameInputBlurHandler} value={enteredFirstName} />
          {firstNameErrorMessage}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler} value={enteredLastName} />
          {lastNameErrorMessage}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailErrorMessage}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
