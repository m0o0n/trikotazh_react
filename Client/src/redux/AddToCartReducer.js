const InitialState = {
  Cart: [
    {
      id: 0,
      name: 'Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция',
      count: 10,
      cost: 1350,
    },
  ],
};

const AddToCartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'AddToCart':
      return {
        ...state,
        Cart: [
          ...state.Cart,
          {
            id: action.id,
            name: action.name,
            count: action.count,
            cost: action.cost,
          },
        ],
      };
    default:
      return state;
  }
};
export default AddToCartReducer;
