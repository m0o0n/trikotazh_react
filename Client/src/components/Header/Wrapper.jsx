import React from 'react';

import Menu from './Menu/Menu';
import Header from './Top/Header';
import s from './Wrapper.module.scss';
const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header s={s} />
      <Menu />
    </div>
  );
};
export default Wrapper;
