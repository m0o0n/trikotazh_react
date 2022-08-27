import React from 'react';

import './App.scss';
import Wrapper from './components/Header/Wrapper';
import ShowCase from './components/Products/Showcase';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper />
        <ShowCase />
      </header>
    </div>
  );
};

export default App;
