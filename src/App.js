import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from 'react';
import { Main } from './components/Main/Main';
import { LogIn } from './components/LogIn/LogIn';
import RentiqPage from "./components/Rentiqpage/Rentiqpage";
import InformationPage from "./components/InformationPage/InformationPage";
import './App.css';

export const LayoutContext = createContext();
export const SelectedFilterContext = createContext();

function App() {

  return (
    <Router className="App">

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MoreAboutOneKey" element={<RentiqPage />} />
        <Route path="/InformationPage" element={<InformationPage />} />
        <Route path="/Signin" element={<LogIn mode='Signin' />} />
        <Route path="/Login" element={<LogIn mode='Login' />} />
      </Routes>

    </Router>
  );
}

export default App;
