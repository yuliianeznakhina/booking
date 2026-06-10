import './SignInBanner.css';

export function SignInBanner() {
  return (<div className="SignInBanner">
    <div className='bannerWrapper'>
      <img src='./images/LOGO.svg' />
      <h3>Your next journey, inspired together.</h3>
    </div>
    <button className='signInBTN'>Sign in</button>
  </div>
  );
}

