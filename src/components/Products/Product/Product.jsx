/* eslint-disable indent */
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import s from './../Products.module.scss';
const Product = props => {
  const [count, setCount] = useState(1);
  const calculateCost = count => {
    if (count < 10) {
      return { cost_perM: props.cost1, cost_total: count * props.cost1 };
    } else if (count >= 10) {
      if (count >= 50) {
        return { cost_perM: props.cost50, cost_total: count * props.cost50 };
      }
      return { cost_perM: props.cost10, cost_total: count * props.cost10 };
    }
  };

  const addToCart = (id, name, count, cost) => {
    props.addToCart(id, name, count, cost);
  };
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
            <div className={s.cost_sl_info}>
              {calculateCost(count).cost_perM} грн/м
            </div>
            <div className={s.quantity}>
              <input type="number" min="1" step="1" value={count} />
              <div className={s.quantity_nav}>
                <div className={s.quantity_nav_shifts}>
                  <div
                    onClick={() => setCount(count + 1)}
                    className={(s.quantity_button, s.quantity_up)}
                  >
                    +
                  </div>
                  <div
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                    className={(s.quantity_button, s.quantity_down)}
                  >
                    -
                  </div>
                </div>
                <div className={s.quantity_nav_cost}>
                  {calculateCost(count).cost_total}грн
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() =>
              addToCart(
                props.id,
                props.name,
                count,
                calculateCost(count).cost_total,
              )
            }
            className={s.add_cart_sl_info}
          >
            Купить
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  state: state,
});
const mapDispatchToProps = dispatch => ({
  addToCart(id, name, count, cost) {
    dispatch({ type: 'AddToCart', id, name, count, cost });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
