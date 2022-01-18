import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo")).data
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload?.data };
    case "USER_INFO_FETCHING":
      return { ...state, userInfo: action.payload?.profile };
    case "USER_LOGOUT":
      Cookies.remove("userInfo");
      return {
        ...state,
        userInfo: null,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
