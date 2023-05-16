import React, { useState } from "react";
import { authService } from "../features/user/userService";

export const descriptionContext = React.createContext({
    modalIsOpen: false,
    item: {},
    ToggleFunction: () => { },
    showDescription: () => { }
})

export default function DescriptionProvider(props) {
    const [modal, setModal] = useState(false)
    const [item, setItem] = useState({})

    const showDescriptionHandler =async (item) => {
       
        setItem(item)
    }
    function ToggleModalHandler() {
        setModal(!modal)
    }
    const ctx_value = {
        modalIsOpen: modal,
        item: item,
        ToggleFunction: ToggleModalHandler,
        showDescription: showDescriptionHandler
    }
    return <descriptionContext.Provider value={ctx_value}>{props.children}</descriptionContext.Provider>
}