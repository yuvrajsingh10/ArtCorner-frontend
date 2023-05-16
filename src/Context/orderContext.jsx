import React from "react";
import { useReducer, useState } from "react";
import { authService } from "../features/user/userService";
import { toast } from "react-toastify";

export const userContext = React.createContext({
  user: "",
  userLoggin: () => {},
  isAuthenticated: false,
  success: false,
});


const getUserfromLocalStorage =localStorage.getItem('user')
?JSON.stringify(localStorage.getItem('user'))
:null;

const initValue = {
  Order:"",
  isAuthenticated: false,
  isError: null,
  isSuccess: null,
  isLoading: false,
  message: null,
};

function orderReducer(state, action) {
  const userData=action.payload.data
  if (action.type === "createOrder" ) {
    
  }
  return {
    order: action.payload,
    isError: false,
    isAuthenticated: true,
    isLoading: false,
    isSuccess: true,
    message: state.message
  };
}

const OrderProvider = (props) => {
  const [order, dispatch] = useReducer(orderReducer, initValue);
  async function fetchOrder(user) {
    let {data,error} = await authService.login(user);

    if(error){
      dispatch({ type: "getOrder", payload: {data:null,error} });
    }
    if (data) {
      dispatch({ type: "getOrder", payload: {data,error:null}});
    }
  }
  async function createOrder(user) {
    let data = await authService.register(user);
    if (data) dispatch({ type: "createOrder", payload: data });
  }
  const user_value = {
    user: auth.user,
    loginUser: loginUser,
    registerUser: registerUser,
    isAuthenticated: auth.isAuthenticated,
    success: auth.isSuccess,
  };
  return (
    <userContext.Provider value={user_value}>
      {props.children}
    </userContext.Provider>
  );
};

export default OrderProvider;
