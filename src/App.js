import React from 'react';
import logo from './logo.svg';
import './App.css';

import PacmanLoader from '@bit/davidhu2000.react-spinners.pacman-loader';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <PacmanLoader
      size='60'
    color='rgb(108, 116, 138)'
    css={{width:"260px !important", height:"130px !important"}}
    />
        <p>
          My simple App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clintronix
        </a>
      </header>
    </div>
  );
}

export default App;
