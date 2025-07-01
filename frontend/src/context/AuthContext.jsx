import { createContext, useReducer } from 'react';

export const AuthContex = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log('AuthContext state', state);

  return (
    <AuthContex.Provider value={{...state, dispatch}}>
      {children}
    </AuthContex.Provider>
  )
};
