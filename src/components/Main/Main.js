import './Main.css';
import { Header } from './Header/Header';
import { About } from './About/About';
import { SignInBanner } from './SignInBanner/SignInBanner';

export function Main() {
  return (<>
    <Header />
    <div className="Main">
      <About />
      <SignInBanner />
    </div>
  </>
  );
}
