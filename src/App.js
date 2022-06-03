import logo from './logo.svg';
import './App.css';

// import router + components
import { Route, Routes, Link } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Gum from './Gum';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <h1>Vending Machine Project</h1>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/gum" element={<Gum />} />
      </Routes>


    </div>
  );
}

export default App;
