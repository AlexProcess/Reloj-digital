import './App.css';
import CountDown from './components/CountDown';
import Crono from './components/Crono';
import DigitalClock from './components/DigitalClock';


function App() {
  
  
  return (
    <div className="App">
      <DigitalClock/>
        <CountDown/>
        <Crono/>
    </div>
  );
}

export default App;
