import React, { useEffect } from 'react';
import { check } from './Api/userApi';
import { connect } from 'react-redux';
import './App.scss';
import Wrapper from './components/Header/Wrapper';
import ShowCase from './components/Products/Showcase';
import { LoginAC, LoginThunk } from './redux/AuthReducer';

const App = props => {
  useEffect(()=>{
    check().then((response)=>{
      props.LoginAC(response.id, response.email, response.role);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper />
        <ShowCase />
      </header>
    </div>
  );
};
const mapStateToProps=(state)=>{
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { LoginThunk, LoginAC })(App);
