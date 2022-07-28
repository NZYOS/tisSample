import React, {createContext, useReducer} from 'react';
const UserContext = createContext(initialState);
const { Provider } = UserContext;

const initialState = {
  token: 'sd78sdsdjd8888dddd-sds',
};

export const SET_TOKEN = 'SET_TOKEN';

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_TOKEN:
        return {
          ...state,
          token: action.token,
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {UserContext, StateProvider};
