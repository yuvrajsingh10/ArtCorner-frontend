import React, { useEffect, useMemo } from "react";
import { useState, useReducer } from "react";
import { authService } from "../features/user/userService";

export const cartContext = React.createContext({
  modalIsOpen: false,
  items: [],
  subTotal: 0,
  totalQuantity: 0,
  ToggleFunction: () => {},
  addItem: () => {},
  removeItem: () => {},
  success: false,
});

const initValue = {
  item: [],
  subtotal: 0,
  totalQuantity: 0,
  success: false,
};

function cartReducer(state, action) {
  let totalQuantity = state.totalQuantity;

  if (action.type === "ADD") {
    const isExistsIndex = state.item.findIndex(
      (item) => item._id === action.payload._id
    );
    let existingItem = state.item[isExistsIndex];

    let updatedItems;
    let subtotal =
      state.subtotal + action.payload.quantity * action.payload.price;
    totalQuantity += 1;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.payload.quantity,
        totalPrice: existingItem.totalPrice + action.payload.price,
      };
      console.log(updatedItem)
      const data = authService.addToCart({
        _id: updatedItem._id,
        price: updatedItem.price,
        quantity: updatedItem.quantity,
      });
      updatedItems = [...state.item];

      updatedItems[isExistsIndex] = updatedItem;
    } else {
      const data = authService.addToCart(action.payload);
      updatedItems = state.item.concat(action.payload);
    }
    return {
      item: updatedItems,
      subtotal: subtotal,
      totalQuantity,
      success: true,
    };
  }

  if (action.type === "REMOVE") {
    state.item = [...[action.item.item]];
    state.totalQuantity = action.item.quantity;
    state.subTotal = action.item.item.price;

    const isExistsIndex = state?.item.findIndex(
      (item) => item._id === action.item.item._id
    );
    let existingItem = state?.item[isExistsIndex];
    let updatedItems;
    let subtotal = state.subtotal - existingItem?.price;
    totalQuantity -= 1;
    if (existingItem?.quantity !== 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem?.quantity - 1,
        totalPrice: existingItem?.price-existingItem.productId.price,
      };
    
      console.log(existingItem.productId.price)
      authService.addToCart({
        _id: updatedItem.productId._id,
        price: updatedItem.productId.price,
        quantity: updatedItem.quantity,
      });

      updatedItems = [...state.item];
      updatedItems[isExistsIndex] = updatedItem;
    } else {
        // console.log(action.item.item.productId._id);
      authService.removeProductfromCart({productId:action.item.item.productId._id});
      updatedItems = state.item.filter((item) => item._id !== action.item.item._id);
    }
    return {
      item: updatedItems,
      subtotal: subtotal,
      totalQuantity,
      success: true,
    };
  }
}

export default function CartProvider(props) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, initValue);
  const [cartItem, setCartItem] = useState(initValue);
  function setModalToggle() {
    setisModalOpen(!isModalOpen);
  }
  async function displayCart() {
    const { data } = await authService.getCart();
    let subtotal = 0;
    for (let x of data) {
      subtotal += parseInt(x.price);
    }
    setCartItem({
      item: data.map((item) => item),
      totalQuantity: data.length,
      success: true,
      subtotal,
    });
  }
  function addItemHandler(item) {
    dispatch({ type: "ADD", payload: item });
  }
  function removeItemHandler(item) {
    dispatch({ type: "REMOVE", item });
  }
  const cart_value = {
    modalIsOpen: isModalOpen,
    items: cartItem.item,
    subTotal: cartItem.subtotal,
    totalQuantity: cartItem.totalQuantity,
    displayCart,
    ToggleFunction: setModalToggle,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    success: cartItem.success,
  };
  useMemo(() => {
    displayCart();
  }, [cart]);
  return (
    <cartContext.Provider value={cart_value}>
      {props.children}
    </cartContext.Provider>
  );
}
