import {PropertyCard} from './components/PropertyCard/PropertyCard';
import './App.css';

function App() {
  return (
    <div className="App">
     <PropertyCard image='https://media.vrbo.com/lodging/19000000/18780000/18770500/18770484/eccebe6c.jpg?impolicy=fcrop&w=600&h=338&q=medium&p=1' title='Villa in Corfu' bedrooms='3' rating='10' reviews='62' price='770' fees='All fees included' dateStart='Oct 1' dateEnd='Oct 5'/>
    </div>
  );
}

export default App;
