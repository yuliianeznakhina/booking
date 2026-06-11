import { Link } from 'react-router-dom';
import './LogIn.css';

export function LogIn(props) {
  return (<div className="LogIn">
    <Link className='backBTN' to="/"><img /></Link>
    <h2>Sign in or log in</h2>
    <h4>Unlock a world of rewards with one account across Expedia</h4>
    <form>
      <input type='email' placeholder='Email' />
      <input type='password' placeholder='Password' />
      {props.mode == 'Signin' &&
        <input type='password' placeholder='Password' />}
      {props.mode == 'Signin' &&
        <label htmlFor='checkbox'><input type='checkbox' /><h4>I predict the situation with <a>local residents</a> and <a>privacy policy</a></h4></label>}
      {props.mode == 'Login' &&
        <label htmlFor='checkbox'><input type='checkbox' /><h4>Remember me</h4></label>}
      {props.mode == 'Login' &&
        <a>Forgot Password or Email?</a>}
      <Link className='signInBTN' to="/Signin">{props.mode == 'Signin' ? "Sign up" : "Log in"}</Link>
    </form>
    <h4>Other ways to log in</h4>
    <button><img />Continue with google</button>
    <button><img />Continue with apple</button>
    {props.mode == 'Login' &&
      <h4>Already have an account? <a>Log in</a></h4>}
    {props.mode == 'Signin' &&
      <h4>Don’t have an account? <a>Sign up</a></h4>}
  </div>
  );
}
