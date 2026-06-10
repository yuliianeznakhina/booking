import './Main.css';
import { About } from './About/About';
import { SignInBanner } from './SignInBanner/SignInBanner';

export function Main() {
  return(<div className="Main">
    <About/>
    <SignInBanner/>
  </div>
);}
