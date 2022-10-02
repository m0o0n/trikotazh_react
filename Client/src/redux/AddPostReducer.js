const InitialState = {
  Products: [
    {
      id: 0,
      name: 'Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция',
      cost1: 185,
      cost10: 160,
      cost50: 135,
    },
    {
      id: 1,
      name: 'Двунитка ПЕНЬЕ КОМПАКТ Турция',
      cost1: 185,
      cost10: 160,
      cost50: 135,
    },
    {
      id: 2,
      name: 'Трехнитка ПЕНЬЕ КОМПАКТ Турция',
      cost1: 185,
      cost10: 160,
      cost50: 135,
    },
  ],
  newProductText: '',
  previewFile: null,
};

const AddPostReducer = (state = InitialState, action) => {
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
    case 'addImage':
      return {
        ...state,
        previewFile: action.newText,
      };
    default:
      return state;
  }
};
export default AddPostReducer;
