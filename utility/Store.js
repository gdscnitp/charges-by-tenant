import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  userInfo: Cookies.get("userInfo")
    ? JSON.parse(JSON.stringify(Cookies.get("userInfo"))).data
    : null,
  siteDetail: [],
  requestDetail: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload?.data };
    case "USER_INFO_FETCHING":
      localStorage.setItem(
        "TenantData",
        JSON.stringify(action.payload?.profile)
      );
      return { ...state, userInfo: action.payload?.profile };
    case "USER_INFO_UPDATING":
      return { ...state, userInfo: action.payload?.profile };
    case "VIEW_REQUESTS":
      return { ...state, siteDetail: action.payload?.data.data };
    case "ACCEPT_REQUEST":
      return { ...state, requestDetail: action.payload?.data };
    case "USER_LOGOUT":
      Cookies.remove("userInfo");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("TenantData");
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
