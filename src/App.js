
import './App.css';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import {themeContext } from './Context/themeContext';
import React,{useContext} from 'react';
import Knowledge from './components/Knowledge/knowledge';
import Portfolio from './components/Portfolio/portfolio';
import Curriculum from './components/Curriculum/curriculum';

function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode

  return (
   <div
    className="App"
    style={{
      background: darkMode ? "black" : "white",
      color: darkMode ? "white" : "",
    }}
  >
   <Navbar/>
   <Home/>
   <Knowledge/>
   <Curriculum/>
   <Portfolio/>
   <Contact/>
   </div>
  );
}

export default App;
