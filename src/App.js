import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { LogIn } from './components/LogIn/LogIn'
import './App.css';

function App() {
  return (
    <Router className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Signin" element={<LogIn mode='Signin' />} />
        <Route path="/Login" element={<LogIn mode='Login' />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
