import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Countsection from './Components/Countsection';
import About from './Components/About';

import { BrowserRouter } from 'react-router-dom'
// import Butterfly from './Components/Canvas/Butterfly';
import { Butterflybg } from "./Components/Canvas";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Home/>
      <Countsection id="counts"/>

      <About/>
      
      
    </BrowserRouter>
  );
}

export default App;
