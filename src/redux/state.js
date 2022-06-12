// import {rerenderEntireTree} from './store'
const store = {
  _state: {
    ProductPage: {
      Products: [
        {id: 0, name: 'Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция'},
        {id: 1, name: 'Двунитка ПЕНЬЕ КОМПАКТ Турция'},
        {id: 2, name: 'Трехнитка ПЕНЬЕ КОМПАКТ Турция'},
      ],
      newProductText: '',
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    if (action.type === 'AddProduct') {
      const newProduct = {
        id: 4,
        name: this._state.ProductPage.newProductText,
      };
      this._state.ProductPage.Products.push(newProduct);

      this.rerenderEntireTree(this._state);
    } else if (action.type === 'upDateNewProductText') {
      this._state.ProductPage.newProductText = action.newText;
      this.rerenderEntireTree(this._state);
    }
  },
};

window.store = store;
export default store;
