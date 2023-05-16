import React, { useEffect } from "react";
import { useState, useReducer } from "react";
import { authService } from "../features/user/userService";

export const wishContext = React.createContext({
  modalIsOpen: false,
  liked: false,
  items: [],
  totalQuantity: 0,
  ToggleFunction: () => {},
  addItem: () => {},
  removeItem: () => {},
});

const initValue = {
  items: [],
  totalQuantity: 0,
};


function wishlistReducer(state, action) {
  let totalQuantity = state.totalQuantity;
  if (action.type === "ADD") {
    const isExistsIndex = state.items.findIndex(
      (item) => item._id === action.item._id
    );
    let existingItem = state.items[isExistsIndex];
    let updatedArray;
    if (!existingItem) {
      const {data} = authService.addTowishList(action.item)
      console.log(data)
      updatedArray = state.items.concat(data)
      totalQuantity += 1;
    } else {
      const {data} = authService.addTowishList(action.item)
      updatedArray = [data];
    }
    return {
      items: updatedArray,
      totalQuantity,
    };
  } else if (action.type === "REMOVE") {
    authService.addTowishList(action.item);
    totalQuantity -= 1;

    let updatedArray;
    updatedArray = state.items.filter((item) => item.id !== action.id);
    return {
      items: updatedArray,
      totalQuantity,
    };
  }
}

export default function WishProvider(props) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [wishlist, dispatch] = useReducer(wishlistReducer, initValue);
  const [items, setItems] = useState(initValue);

  function setModalToggle() {
    setisModalOpen(!isModalOpen);
  }
  async function addItemHandler(item) {
    dispatch({ type: "ADD", item });
    await displayWishlistItems();
  }
  async function removeItemHandler(item) {
    dispatch({ type: "REMOVE", item });
    await displayWishlistItems()
  }
  async function displayWishlistItems() {
    const {data} = await authService.getUserWishlist();
    setItems({
      items: data?.wishlist.filter(item => item),
      totalQuantity:(data?.wishlist.length)
    });
  }
  const wish_value = {
    modalIsOpen: isModalOpen,
    items:items.items,
    totalQuantity: items.totalQuantity,
    ToggleFunction: setModalToggle,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    displayWishlistItems
  };
  useEffect(()=>{

  },[items])
  return (
    <wishContext.Provider value={wish_value}>
      {props.children}
    </wishContext.Provider>
  );
}
