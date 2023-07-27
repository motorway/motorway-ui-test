import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Header from './components/header/Header'

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Header />} ></Route> */}
        <Route path='/' element={<Hero />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;
