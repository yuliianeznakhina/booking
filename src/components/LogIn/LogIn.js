import { Link } from 'react-router-dom';
import './LogIn.css';

export function LogIn(props) {
  function togglePassword() {
    let password = document.querySelector("#password");
    if (password.type === 'password') {
      password.type = 'text';
    }
    else {
      password.type = 'password';
    }
  }
  function toggleConfirmPassword() {
    let password = document.querySelector("#confirmPassword");
    if (password.type === 'password') {
      password.type = 'text';
    }
    else {
      password.type = 'password';
    }
  }

  return (<div className='wrap'>
    <Link className='backBTN' to="/"><img src='./images/icons/arrow-left.svg' /></Link>
    <div className="LogIn">
      <h2>Sign in or log in</h2>
      <h4>Unlock a world of rewards with one account across Expedia</h4>
      <form>
        <label htmlFor='email'>
          <img src='./images/icons/email.svg' />
          <input id='email' type='email' placeholder='Email' />
        </label>
        <label htmlFor='password'>
          <img src='./images/icons/password.svg' />
          <input id='password' type='password' placeholder='Password' />
          <img onClick={togglePassword} src='./images/icons/hide-password.svg' />
        </label>
        {props.mode == 'Signin' &&
          <label htmlFor='confirmPassword'>
            <img src='./images/icons/password.svg' />
            <input id='confirmPassword' type='password' placeholder='Password' />
            <img onClick={toggleConfirmPassword} src='./images/icons/hide-password.svg' />
          </label>}
        {props.mode == 'Signin' &&
          <label htmlFor='checkbox'><input type='checkbox' required /><h4>I predict the situation with <a>local residents</a> and <a>privacy policy</a></h4></label>}
        {props.mode == 'Login' &&
          <label htmlFor='checkbox'><input type='checkbox' /><h4>Remember me</h4></label>}
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
