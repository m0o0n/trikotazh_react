import React from 'react';
import s from './Catalog.module.scss';
import SubMenu from './SubMenu';
class Catalog extends React.Component {
  constructor() {
    super();
    this.hasVisit = false;
  }
  mouseOver() {
    this.SubMenu.style.display = 'flex';
    this.SubMenu.style.width = `${document.documentElement.clientWidth}`;

    setTimeout(() => {
      if (!this.hasVisit) {
        this.mouseLeave();
      }
    }, 1500);
  }
  overSub() {
    this.hasVisit = true;
  }
  mouseLeave() {
    this.SubMenu.style.display = 'none';
    this.hasVisit = false;
  }
  render() {
    return (
      <div>
        <li
          onMouseOver={() => this.mouseOver()}
          className={s.wraper_menu_el_catalog}
        >
          <i className="fas fa-bars"></i>Каталог тканей
        </li>

        <SubMenu
          SubMenuRef={el => (this.SubMenu = el)}
          mouseLeave={() => this.mouseLeave()}
          overSub={() => this.overSub()}
        />
      </div>
    );
  }
}

export default Catalog;
