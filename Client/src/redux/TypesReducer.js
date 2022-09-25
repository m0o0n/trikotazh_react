import { getAll } from '../Api/typesApi';

const InitialState = {
  Types: [

  ],
  initializeTypes: false,
};

const TypesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FetchTypes':
      return {
        ...state,
        Types: [...action.data],
      };
    case 'initializeTypes':
      return {
        ...state,
        initializeTypes: true,
      };
    default:
      return state;
  }
};
const FetchTypesAC =(data)=>({ type: 'FetchTypes', data });
const initializeTypesAC =()=>({ type: 'initializeTypes' });

export const FetchTypesThunk = ()=>{
  return async (dispatch)=>{
    const response = await getAll();
    dispatch(FetchTypesAC(response));
  };
};

export const initTypesThunk=()=>(dispatch)=>{
  const promise = getAll();
  Promise.all([promise]).then(()=>{
    dispatch(initializeTypesAC());
  });
};
export default TypesReducer;

