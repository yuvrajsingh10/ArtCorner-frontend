import { useContext } from "react"
import Wrapper from "../Layout/Wrapper"
import style from './Description.module.css'
import { descriptionContext } from "../../Context/description-context"
import { CiHeart } from 'react-icons/ci'
import { cartContext } from "../../Context/cart-context"
import { wishContext } from "../../Context/wishlist-context"

export default function Description() {
    const desc_ctx = useContext(descriptionContext)
    const cart_ctx = useContext(cartContext)
    const wish_ctx = useContext(wishContext)
    
    function addItemToCartHandler(item){
        cart_ctx.addItem({ ...item, quantity: 1, totalPrice: desc_ctx.item.price })
        desc_ctx.ToggleFunction()
    }

    return (
        <>
            <div className={style.modal}>
            <Wrapper class='container'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                        <div className={`${style.modal_box} shadow-sm container`}>
                            <button onClick={desc_ctx.ToggleFunction} className={`btn ${style.close_btn}`}>X</button>
                            <div className="row">
                                <div className='col-12'>
                                    <div className="row justify-content-center align-items-center p-3">
                                        <div className="col-lg-6">
                                            <div className={`${style.desc_image} d-flex justify-content-center`}>
                                                <img src={desc_ctx.item.thumbnail} alt='' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-flex align-items-center">
                                            <div className={style.desc_info}>
                                                <h3 className={style.desc_title}>{desc_ctx.item.title}</h3>
                                                <p>{desc_ctx.item.description}</p>
                                                <h2 className={style.desc_price}>Rs. <span>{desc_ctx.item.price}</span></h2>
                                                <div className={`d-flex align-items-center mt-3 w-100 ${style.btns}`}>
                                                    <button className="btn button w-50" onClick={() => addItemToCartHandler(desc_ctx.item)}>add to cart</button>
                                                    <span onClick={() => wish_ctx.addItem(desc_ctx.item)}><CiHeart /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
        </>
    )
}