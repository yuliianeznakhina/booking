import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LogIn.css';

export function LogIn(props) {
  const [password, setPassword] = useState({ show: true, img: './images/icons/hide-password.svg' });
  const [confirmPassword, setConfirmPassword] = useState({ show: true, img: './images/icons/hide-password.svg' });

  function togglePassword() {
    if (password.show) {
      setPassword({ show: false, img: './images/icons/show-password.svg' });
    }
    else {
      setPassword({ show: true, img: './images/icons/hide-password.svg' });
    }
  }

  function toggleConfirmPassword() {
    if (confirmPassword.show) {
      setConfirmPassword({ show: false, img: './images/icons/show-password.svg' });
    }
    else {
      setConfirmPassword({ show: true, img: './images/icons/hide-password.svg' });
    }
  }

  return (<div className='wrap'>
    <Link className='backBTN' to="/"><img src='./images/icons/arrow-left.svg' /></Link>
    <div className="LogIn">
      <h2>Sign in or log in</h2>
      <h4>Unlock a world of rewards with one account across Expedia</h4>
      <form>
        <label className='textInput' htmlFor='email'>
          <img src='./images/icons/email.svg' />
          <input id='email' type='email' placeholder='Email' />
        </label>
        <label className='textInput' htmlFor='password'>
          <img src='./images/icons/password.svg' />
          <input id='password' type={password.show ? 'password' : 'text'} placeholder='Password' />
          <img onClick={togglePassword} src={password.img} />
        </label>
        {props.mode == 'Signin' &&
          <label className='textInput' htmlFor='confirmPassword'>
            <img src='./images/icons/password.svg' />
            <input id='confirmPassword' type={confirmPassword.show ? 'password' : 'text'} placeholder='Password' />
            <img onClick={toggleConfirmPassword} src={confirmPassword.img} />
          </label>}
        {props.mode == 'Signin' &&
          <label htmlFor='checkbox' className='checkboxContainer'>
            <input id='checkbox' type='checkbox' required />
            <span class="checkmark"></span>
            <h4>I predict the situation with <a>local residents</a> and <a>privacy policy</a></h4>
          </label>}
        {props.mode == 'Login' &&
          <label htmlFor='checkbox'><input id='checkbox' type='checkbox' /><h4>Remember me</h4></label>}
        {props.mode == 'Login' &&
          <a>Forgot Password or Email?</a>}
        <Link className='signInBTN' to="/">{props.mode == 'Signin' ? "Sign up" : "Log in"}</Link>
      </form>
      <h4>Other ways to log in</h4>
      <button><img />Continue with google</button>
      <button><img />Continue with apple</button>
      {props.mode == 'Login' &&
        <h4>Already have an account? <a>Log in</a></h4>}
      {props.mode == 'Signin' &&
        <h4>Don’t have an account? <a>Sign up</a></h4>}
    </div>
  </div>
  );
}
