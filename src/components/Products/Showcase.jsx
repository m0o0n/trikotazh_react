/* eslint-disable object-curly-spacing */
import React from 'react';
import s from './Products.module.scss';
import Product from './Product/Product';
const ShowCase = props => {
  const postName = React.createRef();
  const addProd = () => {
    props.dispatch({ type: 'AddProduct' });
    props.dispatch({ type: 'upDateNewProductText', newText: '' });
  };
  const OnPostChange = () => {
    const text = postName.current.value;
    props.dispatch({ type: 'upDateNewProductText', newText: text });
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
export default ShowCase;
