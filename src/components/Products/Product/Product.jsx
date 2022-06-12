import React from 'react';

import s from './../Products.module.scss';
const Product = props => {
  return (
    <div>
      <div className={s.catalog_product}>
        <div className={s.product_image}>
          <img src="Images/dvu_nitka.jpg" alt="" />
        </div>
        <div className={s.product_name}>{props.name}</div>
        <div className={s.product_description}>
          <p>Состав:</p>
          <p>Хлопок: 85%, Эластан: 15%</p>
        </div>
        <div className={s.prod_cost}>
          <p>Цена:</p>
          <p>от 1м 185грн/пог.м</p>
          <p>от 10м 160грн/пог.м</p>
          <p>от 50м(рулон) 135грн/пог.м</p>
        </div>
        <div className={s.sl_info_cost_param}>
          <div className={s.cost_container}>
            <div className={s.cost_sl_info}>185 грн/м</div>
            <div className={s.quantity}>
              <input type="number" min="1" step="1" value="1" />
              <div className={s.quantity_nav}>
                <div className={s.quantity_nav_shifts}>
                  <div className={(s.quantity_button, s.quantity_up)}>+</div>
                  <div className={(s.quantity_button, s.quantity_down)}>-</div>
                </div>
                <div className={s.quantity_nav_cost}>185грн</div>
              </div>
            </div>
          </div>
          <div className={s.add_cart_sl_info}>Купить</div>
        </div>
      </div>
    </div>
  );
};
export default Product;
