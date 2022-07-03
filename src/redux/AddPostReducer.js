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
      return {
        ...state,
        Products: [...state.Products, { id: 4, name: state.newProductText }],
      };
    case 'upDateNewProductText':
      return {
        ...state,
        newProductText: action.newText,
      };
    default: return state;
  }
};
export default AddPostReducer;
