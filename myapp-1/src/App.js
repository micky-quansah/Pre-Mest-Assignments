import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Title.js'
import Title from './components/Title.js';
import UsefulLink from './components/Useful-links.js';
import SomeInfo from './components/SomeInfo.js';
import Table from './components/Table.js';
import Image from './components/Image.js';
import Content1 from './components/Content1.js';
import Content2 from './components/Content2.js';
import Content3 from './components/Content3.js';
import Content4 from './components/Content4.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <UsefulLink />
      </header>
      <section>
        <SomeInfo className='someInfo'/>
        <Table />
        <Image />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Footer />
      </section>
    </div>
  );
}

export default App;
