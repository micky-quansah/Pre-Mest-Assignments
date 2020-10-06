import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Title.js'
import Title from './components/Title.js';
import UsefulLink from './components/Useful-links.js';
import SomeInfo from './components/SomeInfo.js';
import Table from './components/Table.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <UsefulLink />
      </header>
      <section>
        <SomeInfo />
        <Table />
      </section>
    </div>
  );
}

export default App;
