import { getAll } from '../Api/subtypesApi';

const InitialState = {
  Subtypes: [

  ],
  initializeSubTypes: false,
};

const SubTypesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'FetchSubTypes':
      return {
        ...state,
        Subtypes: [...action.data],
      };
    case 'initializeSubTypes':
      return {
        ...state,
        initializeSubTypes: true,
      };
    default:
      return state;
  }
};
const FetchSubTypesAC =(data)=>({ type: 'FetchSubTypes', data });
const initializeSubTypesAC =()=>({ type: 'initializeSubTypes' });

export const FetchSubTypesThunk = ()=>{
  return async (dispatch)=>{
    const response = await getAll();
    dispatch(FetchSubTypesAC(response));
  };
};

export const initSubTypesThunk=()=>(dispatch)=>{
  const promise = getAll();
  Promise.all([promise]).then(()=>{
    dispatch(initializeSubTypesAC());
  });
};
export default SubTypesReducer;

