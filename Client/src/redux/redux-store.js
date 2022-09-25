import { combineReducers, createStore, applyMiddleware } from 'redux';
import AddPostReducer from './AddPostReducer';
import AddToCartReducer from './AddToCartReducer';
import { reducer as formReducer } from 'redux-form';
import thunkMidleWare from 'redux-thunk';
import { AuthReducer } from './AuthReducer';
import SubTypesReducer from './SubTypesReducer';
import TypesReducer from './TypesReducer';
const reducers = combineReducers({
  ProductPage: AddPostReducer,
  Cart: AddToCartReducer,
  Auth: AuthReducer,
  SubTypes: SubTypesReducer,
  Types: TypesReducer,
  form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMidleWare));
window.store = store;
export default store;
