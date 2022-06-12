import React from 'react';
import s from './Header.module.scss';

const Header = props => {
  return (
    <div className={s.wrapper_head}>
      <div className={s.logo}>
        <img src={require('./../../../assets/Images/logo.png')} alt="" />
      </div>
      <div className={s.phone_schedule}>
        <div className={s.phone}>
          <span>
            <i className="fas fa-phone"></i>
          </span>{' '}
          <p> Номер телефона </p>{' '}
          <img src={require('./../../../assets/Images/vodafone.png')} alt="" />{' '}
          <a href="#">+380-95-133-27-54</a>
        </div>
        <div className={s.work_schedule}>
          График работы: 10:00 - 20:00 Без выходных
        </div>
      </div>

      <div className={s.social}>
        <div>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
