const AddPostReducer =(state, action)=>{
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
