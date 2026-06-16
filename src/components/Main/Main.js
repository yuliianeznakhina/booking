import './Main.css';
import { Header } from '../Header/Header';
import { Find } from './Find/Find';
import Place from "../Place/Place";
import { About } from './About/About';
import { SignInBanner } from './SignInBanner/SignInBanner';
import FQL from './FQL/FQL';
import Footer from '../Footer/Footer';

export function Main() {
  return (<>
    <Header />
    <Find />
    <div className="Main">
      <Place />
      <About />
      <SignInBanner />
      <FQL />
    </div>
    <Footer />
  </>
  );
}
