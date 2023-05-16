import React, { useEffect} from "react";
import { useReducer} from "react";
import { toast } from "react-toastify";
import { productService } from "../features/products/productService";

export const productContext = React.createContext({
  product:"",
  success: false,
});

const initValue = {
  product: "",
  isError: null,
  isSuccess: null,
  isLoading: false,
  message: null,
};

function productReducer(state, action) {
  let updatedData={};
  if (action.type === "createProduct") {
    
  }
  return {
    product: updatedData?.user,
    isError: updatedData?.isError,
    isLoading: updatedData?.isLoading,
    isSuccess: updatedData?.isSuccess,
    message: updatedData?.message,
  };
}

const ProductProvider = (props) => {
  const [product, dispatch] = useReducer(productReducer, initValue);
  async function createProduct(product){
    const data = await productService.createProduct(product)
    console.log(data)
    dispatch({type:"createOrder",payload:product})
  }
  const product_value = {
    product :product.product,
    createProduct,
    success: product.isSuccess,
  };
  useEffect( ()=>{
    
  },[])
  return (
    <productContext.Provider value={product_value}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductProvider;
