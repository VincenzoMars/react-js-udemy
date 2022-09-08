import { useState, useEffect } from 'react';
import '../assets/styles/components/login.scss';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes('@') && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div className='login-wrapper'>
      <form className='login-wrapper__form' onSubmit={submitHandler}>
        <h2 className='form-title'>Login</h2>

        <div className='form-field'>
          <input
            type="email"
            id="email"
            placeholder='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <label htmlFor="email">E-Mail</label>
        </div>
        <div className='form-field'>
          <input
            type="password"
            id="password"
            placeholder='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <button className='submit-button' type="submit" disabled={!formIsValid}>
            Enjoy
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
