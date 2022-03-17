import React from 'react';

import { Blog, Features, Footer, Header, Security, About } from './compounds';
import { Register, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <About />
      <Features />
      <Security />
      <Register />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

