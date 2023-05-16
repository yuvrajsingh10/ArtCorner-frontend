import React, { useEffect, useMemo } from "react";
import { useReducer, useState } from "react";
import { authService } from "../features/user/userService";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';

export const userContext = React.createContext({
  user: "",
  userLoggin: () => {},
  isAuthenticated: false,
  success: false,
});

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.stringify(localStorage.getItem("user"))
  : null;

const initValue = {
  user: getUserfromLocalStorage,
  isAuthenticated: false,
  isError: null,
  isSuccess: null,
  isLoading: false,
  message: null,
};

function userReducer(state, action) {
  let updatedData={};
  if (action.type === "loginUser") {
    if (action.payload.error === null) {
      updatedData.user=action.payload.data;
      updatedData.isError = false;
      updatedData.isLoading = false;
      updatedData.isSuccess = true;
      // localStorage.setItem("token", updatedData.user.token);
      updatedData.isAuthenticated =
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== undefined;
      updatedData.message = "userLoggedIn";
      if (updatedData.isSuccess == true) {
        localStorage.setItem("authenticated", true);
        localStorage.setItem("token", updatedData.user.token);
        toast.info(updatedData.message);
      }
    } else {
      const error = action.payload.error;
      toast.info(error);
    }
  }
  else if (action.type === "registerUser") {
    updatedData.isError = false;
    updatedData.isLoading = false;
    updatedData.isSuccess = true;
    if (updatedData.isSuccess == true) {
      updatedData.message = "User registered successfully";
      toast.info(updatedData.message);
    }
  }
  else if (action.type === "logout") {
    const { msg } = authService.logoutUser();
    toast.info(msg);
  }
  else if(action.type ==='forgetPassword'){
    const userEmail =action.payload
    // console.log(userEmail)
    authService.forgetPassword(userEmail)
  }
  else if(action.type ==='fetchLoggedInuser'){
    const user =action.payload;
    updatedData.user=user;
    // console.log(updatedData)
  }
  return {
    user: updatedData?.user,
    isError: updatedData?.isError,
    isAuthenticated: updatedData?.isAuthenticated,
    isLoading: updatedData?.isLoading,
    isSuccess: updatedData?.isSuccess,
    message: updatedData?.message,
  };
}

const UserProvider = (props) => {
  const [auth, dispatch] = useReducer(userReducer, initValue);
  async function loginUser(user) {
    let { data, error } = await authService.login(user);

    if (error) {
      dispatch({ type: "loginUser", payload: { data: null, error } });
      return;
    }
    if (data) {
      dispatch({ type: "loginUser", payload: { data, error: null } });
      return auth;
    }
  }
  async function registerUser(user) {
    let data = await authService.register(user);
    if (data) dispatch({ type: "registerUser", payload: data });
  }

  function logoutUser() {
    dispatch({ type: "logout" });    
  }

  function forgetPassword (email){
    dispatch({type:"forgetPassword",payload:email})
  }
  function fetchLoggedInUser(){
    const user = JSON.parse(localStorage.getItem("user"))
    dispatch({type:"fetchLoggedInuser",payload:user})
  }
  const user_value = {
    user: auth.user,
    loginUser: loginUser,
    logoutUser,
    registerUser,
    forgetPassword,
    isAuthenticated: auth.isAuthenticated,
    success: auth.isSuccess,
  };
  useEffect( ()=>{
    fetchLoggedInUser()
  },[])
  return (
    <userContext.Provider value={user_value}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
