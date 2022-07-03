/* eslint-disable object-curly-spacing */
import React from 'react';
import s from './Products.module.scss';
import { connect } from 'react-redux';
import Product from './Product/Product';
const ShowCase = props => {
  const postName = React.createRef();
  const addProd = () => {
    props.addProd();
  };
  const OnPostChange = () => {
    const text = postName.current.value;
    props.OnPostChange(text);
  };
  return (
    <div>
      <div className={s.catalog}>
        <div className={s.product}>
          <div className="addProduct">
            <textarea
              onChange={OnPostChange}
              ref={postName}
              value={props.newProductText}
            />
            <button onClick={addProd}>Add</button>
          </div>
          {props.state.ProductPage.Products.map((p, i) => {
            return <Product key={i} name={p.name} />;
          })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  state: state,
});
const mapDispatchToProps = dispatch => ({
  addProd() {
    dispatch({ type: 'AddProduct' });
  },
  OnPostChange(newText) {
    dispatch({ type: 'upDateNewProductText', newText });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowCase);
