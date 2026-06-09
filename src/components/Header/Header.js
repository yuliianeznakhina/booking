import './Header.css';
import { useState } from 'react';


export function Header() {
  const countries = [
    { image: './images/icons/flag-UA.png', name: 'UA' },
    { image: './images/icons/flag-USA.png', name: 'USA' },
    { image: './images/icons/flag-TR.png', name: 'TR' },
    { image: './images/icons/flag-CH.png', name: 'CH' },
    { image: './images/icons/flag-IND.png', name: 'IND' },
    { image: './images/icons/flag-DN.png', name: 'DN' }
  ]

  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);

  return (<header className="Header">
    <div id='countrySelect'>
      <div className='countrySelected' onClick={() => setOpen(!open)}> <img src={selected.image} />{selected.name}<img src='./images/icons/arrow-down.png'/></div>
      {open && (
        <div className='countryOption'>
          {countries.map((country) => (<div
            onClick={() => {
              setSelected(country);
              setOpen(false);
            }}>
            <img src={country.image} />
          </div>))}
        </div>)}
    </div>
    <button className='appBTN'>Open app<img src='./images/icons/open-app.png' /></button>
    <nav>
      <a>Trip Boards</a>
      <a>List your property</a>
      <a>Help</a>
      <a>My trips</a>
    </nav>
    <button className='signInBTN'>Sign in</button>
  </header>
  );
}
