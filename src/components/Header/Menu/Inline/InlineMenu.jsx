import React from 'react';
import Catalog from '../Catalog/Catalog';
import s from './InlineMenu.module.scss';
const InlineMenu = () => {
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
      </div>
    </div>
  );
};
export default InlineMenu;
