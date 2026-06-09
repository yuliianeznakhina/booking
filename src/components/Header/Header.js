import './Header.css';

const countries = [
  {image:'./images/icons/flag-UA.png', name:'UA'},
  {image:'./images/icons/flag-USA.png', name:'USA'},
  {image:'./images/icons/flag-TR.png', name:'TR'},
  {image:'./images/icons/flag-CH.png', name:'CH'},
  {image:'./images/icons/flag-IND.png', name:'IND'},
  {image:'./images/icons/flag-DN.png', name:'DN'}
]

export function Header() {
  return (<header className="Header">
    <select id='country'>
      {countries.map(elem=><option value={elem.name}><img src={elem.image}/></option>)}
    </select>
    <button className='appBTN'>Open app<img src='./images/icons/open-app.png'/></button>
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
