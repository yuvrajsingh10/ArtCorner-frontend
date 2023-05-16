import axios, { AxiosError } from "axios"
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const register = async (userData) => {
    try {
        const response = await axios.post(`${base_url}/user/register`, userData);
        if (response.status === 200 && response.data) {
            return {
                data: response.data,
                error: null
            }
        }
    } catch (error) {
        return {
            data: null,
            error: "Server Error"
        }
    }
}
const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}/user/login`, userData);
        if (response.status !== 200 || response.status === 404) {
            return { data: null, error: "something wrong" }
        }
        if (response.status === 200 && response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
            return { data: response.data, error: null };
        }
    } catch (error) {
        return { data: null, error: "somthing went wrong please try again some time" }
    }
}

const logoutUser = async () => {
    try {
        // const response = await axios.get(`${base_url}/user/logout`);
        // if (response.status !== 200 ) {
        //     return { msg: "", error: "something wrong" }
        // }
        // if (response.status === 200) {
            localStorage.removeItem("user")
            localStorage.removeItem('token')
            localStorage.setItem("authenticated", false)
            window.location.reload();
            return { msg: "User logout", error: null };
        // }
    } catch (error) {
        return { data: null, error: "somthing went wrong please try again some time" }
    }
}
const getCart = async () => {
    try {
        const response = await axios.get(`${base_url}/user/cart`, config)
        // console.log(response.data)
        if (response.status === 200 && response.data) {
            return { data: response.data, error: null };
        }
    }
    catch (error) {
        return { data: null, error: "Server Error" };
        // throw new Error(error);
    }
}
const removeProductfromCart = async ({ productId }) => {
    console.log(productId)
    try {
        const response = await axios.delete(`${base_url}/user/removeproductcart/${productId}`, config)
        console.log(response.data)
        if (response.status === 200 && response.data)
            return {
                data: response.data,
                error: null
            }
    } catch (error) {
        return {
            data: null,
            error: 'Something went wrong try again'
        }
    }
}

const addTowishList = async (item) => {
    try {
        const response = await axios.put(`${base_url}/product/wishlist`, item, config)
        if (response.status === 200 && response.data) {
            return {
                data: response.data,
                error: null
            }
        }
    } catch (error) {
        return {
            data: null,
            error: "Server Error ! something went wrong"
        }
    }
}
const getUserWishlist = async () => {
    try {
        const response = await axios.get(`${base_url}/user/wishlist`, config)
        if (response.status === 200 && response.data) {

            return {
                data: response.data,
                error: null
            }
        }
    } catch (error) {
        return {
            data: null,
            error: error
        }
    }
}
const addToCart = async (product) => {
    try {
        const response = await axios.put(`${base_url}/user/cart`, product, config)
        if (response.status === 200 && response.data) {
            return response.data;
        }
    }
    catch (error) {
        throw new Error(error);
    }
}

const forgetPassword = async(email)=>{
    try {
        console.log(email)
        const response = await axios.put(`${base_url}/user/forgotPasswordToken`,email)
        if(response.status ===200 && response.data){
            return response.data
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const authService = {
    register,
    login,
    logoutUser,
    getCart,
    addToCart,
    removeProductfromCart,
    getUserWishlist,
    addTowishList,
    forgetPassword,
}