const InitialState = {
  Products: [
    { id: 0, name: 'Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция' },
    { id: 1, name: 'Двунитка ПЕНЬЕ КОМПАКТ Турция' },
    { id: 2, name: 'Трехнитка ПЕНЬЕ КОМПАКТ Турция' },
  ],
  newProductText: '',
};

const AddPostReducer =(state = InitialState, action)=>{
  switch (action.type) {
    case 'AddProduct':
      const newProduct = {
        id: 4,
        name: state.newProductText,
      };
      state.Products.push(newProduct);
      return state;
    case 'upDateNewProductText':
      state.newProductText = action.newText;
      return state;
    default: return state;
  }
};
export default AddPostReducer;
