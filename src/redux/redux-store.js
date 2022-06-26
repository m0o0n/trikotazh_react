import { combineReducers, createStore } from 'redux';
import AddPostReducer from './AddPostReducer';

const reducers = combineReducers({
  ProductPage: AddPostReducer,
});
const store = createStore(reducers);

export default store;
