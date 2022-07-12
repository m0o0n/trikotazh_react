import AddPostReducer from './AddPostReducer';
const store = {
  _state: {
    ProductPage: {
      Products: [
        { id: 0, name: 'Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция' },
        { id: 1, name: 'Двунитка ПЕНЬЕ КОМПАКТ Турция' },
        { id: 2, name: 'Трехнитка ПЕНЬЕ КОМПАКТ Турция' },
      ],
      newProductText: '',
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {},
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this._state.ProductPage = AddPostReducer(this._state.ProductPage, action);
    this.rerenderEntireTree(this._state);
  },
};

window.store = store;
export default store;
