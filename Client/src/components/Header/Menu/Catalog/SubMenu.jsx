import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  FetchSubTypesThunk,
  initSubTypesThunk,
} from '../../../../redux/SubTypesReducer';
import {
  FetchTypesThunk,
  initTypesThunk,
} from '../../../../redux/TypesReducer';
import s from './Catalog.module.scss';
const SubMenu = props => {
  useEffect(() => {
    props.FetchSubTypesThunk();
    props.FetchTypesThunk();
    props.initSubTypesThunk();
    props.initTypesThunk();
  }, []);
  if (!props.initializeSubTypes && !props.initializeTypes) {
    <div>loading</div>;
  } else {
    return (
      <div>
        <ul
          style={{ width: document.documentElement.clientWidth }}
          onMouseLeave={() => props.mouseLeave()}
          onMouseOver={() => props.overSub()}
          ref={props.SubMenuRef}
          className={s.wraper_menu_sub_menu}
        >
          {props.state.SubTypes.Subtypes.map(li => {
            return (
              <Customli
                key={li.id}
                id={li.id}
                name={li.name}
                types={props.Types}
              />
            );
          })}
        </ul>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    state: state,
    SubTypes: state.SubTypes.Subtypes,
    Types: state.Types.Types,
    initializeSubTypes: state.SubTypes.initializeSubTypes,
    initializeTypes: state.Types.initializeTypes,
  };
};
export default connect(mapStateToProps, {
  FetchSubTypesThunk,
  FetchTypesThunk,
  initSubTypesThunk,
  initTypesThunk,
})(SubMenu);
const Customli = props => {
  return (
    <li>
      <div className={s.article_sub_menu_el}>{props.name}</div>
      {props.types.map(nav => {
        if (nav.subTypeId === props.id) {
          return (
            <NavLink key={nav.id} to={`/products/${nav.id}`}>
              {nav.name}
            </NavLink>
          );
        }
      })}
    </li>
  );
};

/* <div>
      <ul
        style={{ width: document.documentElement.clientWidth }}
        onMouseLeave={() => props.mouseLeave()}
        onMouseOver={() => props.overSub()}
        ref={props.SubMenuRef}
        className={s.wraper_menu_sub_menu}
      >
        <li>
          <div className={s.article_sub_menu_el}>Клеевые материалы</div>
          <a href="#" id="this">
            Стрейч Дублерин<div className={s.sub_menu_active}></div>
          </a>
          <a href="#">Флизелин</a>
          <a href="#">Клеевая ткань Дублерин</a>
          <a href="#">Шторный Дублерин</a>
          <a href="#">Клей двухсторонний</a>
          <a href="#">Бандо</a>
          <a href="#">Долевик, термолента</a>
        </li>

        <li>
          <div className={s.article_sub_menu_el}>Трикотаж</div>
          <a href="#">Неопрен</a>
          <a href="#">Трехнитка петля</a>
          <a href="#">Для футболок</a>
          <a href="#">Фактурная ткань</a>
        </li>

        <li>
          <div className={s.article_sub_menu_el}>Ткань</div>
          <a href="#" className={s.sub_menu_link}>
            Костюмная ткань Шерсть
          </a>
          <a href="#">Костюмная ткань Поливискоза</a>
          <a href="#">Польтовые ткани</a>
          <a href="#">Габардин однотонный</a>
          <a href="#">Карманая ткань Х/Б</a>
          <a href="#">Рубашечная ткань</a>
          <a href="#">Коттон 100%</a>
          <a href="#">Летняя ткань</a>
        </li>

        <li>
          <div className={s.article_sub_menu_el}>Подкладка</div>
          <a href="#">Вискоза саржа</a>
          <a href="#">Нейлон</a>
          <a href="#">Атлшас</a>
          <a href="#">Вискоза 50/50</a>
        </li>

        <li>
          <div className={s.article_sub_menu_el}>Прочее</div>
          <a href="#">Супер софт Принт</a>
          <a href="#">Бортовка</a>
          <a href="#">Лен костюмный</a>
          <a href="#">Эко кожа</a>
          <a href="#">Рефлективная ткань</a>
        </li>
      </ul>
    </div> */
