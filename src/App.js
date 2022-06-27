import React from 'react';

import './App.scss';
import Wrapper from './components/Header/Wrapper';
import ShowCaseContainer from './components/Products/ShowCaseContainer';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper />
        <ShowCaseContainer/>
      </header>
    </div>
  );
};

export default App;
