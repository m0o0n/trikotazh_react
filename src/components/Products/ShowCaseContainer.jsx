/* eslint-disable object-curly-spacing */
import React from 'react';
import ShowCase from './Showcase';
import StoreContext from '../../StoreContext';
const ShowCaseContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const addProd = () => {
          store.dispatch({ type: 'AddProduct' });
          store.dispatch({ type: 'upDateNewProductText', newText: '' });
        };
        const OnPostChange = text => {
          store.dispatch({ type: 'upDateNewProductText', newText: text });
        };
        return (
          <ShowCase
            newProductText={store.getState().ProductPage.newProductText}
            state={store.getState()}
            OnPostChange={OnPostChange}
            addProd={addProd}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default ShowCaseContainer;
