import Wrapper from "../Layout/Wrapper"
import style from './Wishlist.module.css'
import EmptyCard from "../Layout/EmptyCard"
import { wishContext } from "../../Context/wishlist-context"
import { descriptionContext } from "../../Context/description-context"
import { cartContext } from "../../Context/cart-context"
import { useContext, useEffect, useMemo, useState } from "react"
import { AiOutlineDelete } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import Description from '../Modal/DescriptionModal';
import { authService } from "../../features/user/userService"

export default function WishlistModal() {
    const cart_ctx = useContext(cartContext)
    const wish_ctx = useContext(wishContext)
    const desc_ctx = useContext(descriptionContext)
    const [itemRemoved,setItemRemoved]=useState(false)
    

    function addItemToCart(item){
        cart_ctx.addItem({
            ...item,
            quantity: 1,
            totalPrice: item.price
        })
        wish_ctx.removeItem(item)
    }
    const descriptionHandler = (item) => {
        desc_ctx.ToggleFunction()
        desc_ctx.showDescription(item)
    }
   
    useMemo(()=>{
        wish_ctx.displayWishlistItems();
    },[itemRemoved])

    return (
        <div className={style.modal}>
            <Wrapper class='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center align-item-center h-100'>
                        <div className={`${style.modal_box} shadow-sm container`}>
                            <button onClick={wish_ctx.ToggleFunction} className={`btn ${style.close_btn}`}>X</button>
                            <h3 className={style.heading}>Your Wishlist</h3>
                            <div className="row pt-5">
                                <div className='col-12'>
                                    <div className="row justify-content-center">
                                    
                                        {wish_ctx?.items !== 0 && (
                                            wish_ctx?.items?.map(item => (
                                                <div className="col-lg-3" key={item._id}>
                                                    <div className='card'  >
                                                        <div className="card-body">
                                                            <img src={item.images[0]} alt='paintings' />
                                                        </div>
                                                        <div className="main--wishlist--card">
                                                            <span className='heart--icon'><AiOutlineDelete onClick={() =>{
                                                                wish_ctx.removeItem(item)
                                                                setItemRemoved(!itemRemoved)
                                                                }} /></span>
                                                            <span className='eye--icon'><BsEye onClick={() => descriptionHandler(item)} /></span>
                                                        </div>
                                                        <div className="main--cart"><h3 className="add-to-cart" onClick={() => addItemToCart(item)}>add to cart</h3></div>
                                                        <div className="card-footer py-2">
                                                            <h3 className="title">{item.title}</h3>
                                                            <p className="price">Rs. {item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                        {wish_ctx?.items?.length === 0 && (
                                            <EmptyCard title='Your wishlist is empty' />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            {/* {console.log(desc_ctx.modalIsOpen)} */}
            {desc_ctx.modalIsOpen && <Description />}
        </div>
    )
}