import { Navigate } from "react-router-dom";

export const PrivateRoute =({children})=>{
    const getTokenFromLocalStorage = localStorage.getItem("user")
    console.log(getTokenFromLocalStorage)
}