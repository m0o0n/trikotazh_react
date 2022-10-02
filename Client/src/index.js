import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '../src/redux/redux-store';
import Auth from './components/Auth/Auth';
import Admin from './components/Admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Provider>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
