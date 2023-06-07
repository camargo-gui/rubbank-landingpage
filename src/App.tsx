import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/HomeSection';
import CaixinhasSection from './components/CaixinhasSection';
import VantagensSection from './components/VantagensSection';
import SobreNosSection from './components/SobreNosSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <CaixinhasSection/>
      <div id='vantagens'>
        <VantagensSection/>
      </div>
      <div id='sobrenos'>
        <SobreNosSection/>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
