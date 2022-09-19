import { combineReducers, createStore, applyMiddleware } from 'redux';
import AddPostReducer from './AddPostReducer';
import AddToCartReducer from './AddToCartReducer';
import { reducer as formReducer } from 'redux-form';
import thunkMidleWare from 'redux-thunk';
import { AuthReducer } from './AuthReducer';
const reducers = combineReducers({
  ProductPage: AddPostReducer,
  Cart: AddToCartReducer,
  Auth: AuthReducer,
  form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMidleWare));
window.store = store;
export default store;
