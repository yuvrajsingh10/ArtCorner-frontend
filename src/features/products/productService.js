import axios from "axios"
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getProducts = async () => {
    let response = await axios.get(`${base_url}/product/`);
    if (response.data) {
        return response.data;
    }
}

const createProduct = async (product) => {
    try {
        const path = await uploadPhoto({images:[...[product.images]]})
        let response = await axios.post(`${base_url}/product`)
        console.log(response.data);
        if(response.status ===200 && response.data){
            uploadPhoto(response.data)
        }
    } catch (error) {
        throw new Error(error);
    }
}

const uploadPhoto = async (data) => {
    try {
        console.log(data)

        const response = await axios.put(`${base_url}/product/upload/`,data,config)
        console.log(response.data)
    } catch (error) {
        throw new Error(error);
    }
}

export const productService = {
    getProducts,
    createProduct,
}