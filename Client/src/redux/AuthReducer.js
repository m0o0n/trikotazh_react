import { login } from '../Api/userApi';

const initialState = {
  id: null,
  email: null,
  role: null,
  isAuth: false,
};

export const AuthReducer = (state = initialState, action)=>{
  switch (action.type) {
    case 'login':
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case 'logout':
      return {
        ...state,
        id: null,
        email: null,
        role: null,
        isAuth: false,
      };
    default: return state;
  }
};

export const LoginAC=(
    id,
    email,
    role,
)=>({ type: 'login', data: { id, email, role }});
export const LogoutAC=()=>({ type: 'logout' });

export const LoginThunk = (email, password)=>{
  return async (dispatch)=>{
    const response = await login(email, password);
    dispatch(LoginAC(response.id, response.email, response.role));
  };
};


