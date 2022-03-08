import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar.components';
import 'bootstrap/dist/css/bootstrap.css';
import CoinInfo from './Components/coinInfo';
import { coins } from './Components/getData';

function App() {
  return (
    <div className="App">
      {/* <SearchBox/> */}
      <Navbar />
      <CoinInfo/>
    </div>
  );
}

export default App;
