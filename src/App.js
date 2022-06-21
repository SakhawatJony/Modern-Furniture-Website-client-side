import logo from './logo.svg';
import './App.css';
import Navegation from './Pages/Shared/Navegation/Navegation';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
  <Navegation></Navegation>
  <Home></Home>
    </div>
  );
}

export default App;
