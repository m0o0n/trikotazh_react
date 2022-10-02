import React from 'react';
import Catalog from '../Catalog/Catalog';
import s from './InlineMenu.module.scss';
import { LogoutAC } from '../../../../redux/AuthReducer';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
const InlineMenu = props => {
  const LogOut = () => {
    localStorage.removeItem('token');
    props.LogoutAC();
  };
  return (
    <div className={s.wrapper_menu_container}>
      <ul className={s.wrapper_menu}>
        <Catalog />
        <li className={s.wrapper_menu_el}>Главная</li>
        <li className={s.wrapper_menu_el}>Акции</li>
        <li className={s.wrapper_menu_el}>Новинки</li>
        <li className={s.wrapper_menu_el}>Контакты и доставка</li>
      </ul>

      <div className={s.cart_search}>
        <div className={s.search}>
          <i className="fas fa-search"></i>
        </div>
        <div className={s.cart}>
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div>
          {props.isAuth ? (
            <div
              className={s.auth_button}
              onClick={() => LogOut()}
              aria-label="Logout"
            ></div>
          ) : (
            <NavLink
              aria-label="login"
              className={s.auth_button}
              to="/auth"
            ></NavLink>
          )}
        </div>
        {props.role === 'ADMIN' ? (
          <NavLink
            className={s.admin}
            aria-label="Admin Page"
            to="/admin"
          ></NavLink>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    state: state,
    isAuth: state.Auth.isAuth,
    role: state.Auth.role,
  };
};
export default connect(mapStateToProps, { LogoutAC })(InlineMenu);
