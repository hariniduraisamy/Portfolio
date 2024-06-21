import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Links from './components/Links'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Exp from './components/Exp';
import Contact from './components/Contact';
 
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Exp />
      <Contact/>
      <Links/>


    </div>
  );
}

export default App;
