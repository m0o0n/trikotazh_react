import { combineReducers, createStore } from 'redux';
import AddPostReducer from './AddPostReducer';
import AddToCartReducer from './AddToCartReducer';

const reducers = combineReducers({
  ProductPage: AddPostReducer,
  Cart: AddToCartReducer,
});
const store = createStore(reducers);
window.store = store;
export default store;
