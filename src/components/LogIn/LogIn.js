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

  return (<div className='loginWrap'>
    <Link className='backBTN' to="/"><img src='./images/icons/arrow-left.svg' /></Link>
    <div className='loginCenter'>
      <div className="LogIn">
        <div className='loginTitle'>
          <h2>Sign in or log in</h2>
          <h4>Unlock a world of rewards with one account across Expedia</h4>
        </div>
        <form action='/'>
          <label className='textInput' htmlFor='email'>
            <img src='./images/icons/email.svg' />
            <input id='email' type='email' placeholder='Email' required />
          </label>
          <label className='textInput' htmlFor='password'>
            <img src='./images/icons/password.svg' />
            <input id='password' type={password.show ? 'password' : 'text'} placeholder='Password' required />
            <img onClick={togglePassword} src={password.img} />
          </label>
          {props.mode == 'Signin' &&
            <label className='textInput' htmlFor='confirmPassword'>
              <img src='./images/icons/password.svg' />
              <input id='confirmPassword' type={confirmPassword.show ? 'password' : 'text'} placeholder='Password' required />
              <img onClick={toggleConfirmPassword} src={confirmPassword.img} />
            </label>}
          {props.mode == 'Signin' &&
            <label htmlFor='checkbox' className='checkboxContainer'>
              <input id='checkbox' type='checkbox' required />
              <span class="checkmark"></span>
              <h4 className='link'>I predict the situation with <Link>local residents</Link> and <Link>privacy policy</Link></h4>
            </label>}

          {props.mode == 'Login' &&
            <span className='loginCheckbox link'>
              <label htmlFor='checkbox'><input id='checkbox' type='checkbox' /><h4>Remember me</h4></label>
              <a>Forgot Password or Email?</a>
            </span>}

          <button className='signInBTN' to="/">{props.mode == 'Signin' ? "Sign up" : "Log in"}</button>
        </form>
        <h4>Other ways to log in</h4>
        <button className='altLogin'><img src='./images/icons/google-logo.svg' /><span>Continue with google</span></button>
        <button className='altLogin'><img src='./images/icons/apple-logo.svg' /><span>Continue with apple</span></button>
        {props.mode == 'Login' &&
          <h4 className='link'>Don’t have an account? <Link to='/Signin'>Sign up</Link></h4>}
        {props.mode == 'Signin' &&
          <h4 className='link'>Already have an account? <Link to='/Login'>Log in</Link></h4>}
      </div>
    </div>
  </div>
  );
}
