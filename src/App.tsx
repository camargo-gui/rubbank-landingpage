import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/HomeSection';
import CaixinhasSection from './components/CaixinhasSection';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <CaixinhasSection/>
    </div>

  );
}

export default App;
