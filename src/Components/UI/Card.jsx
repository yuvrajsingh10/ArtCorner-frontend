import { useContext, useState } from 'react'
import { cartContext } from '../../Context/cart-context'
import { wishContext } from '../../Context/wishlist-context';
import { descriptionContext } from '../../Context/description-context';
import { CiHeart } from 'react-icons/ci'
import { GoHeart } from 'react-icons/go'
import { BsEye } from 'react-icons/bs'

export default function Card(props) {
    const [clicked, setClicked] = useState(false)
    const cart_ctx = useContext(cartContext)
    const wish_ctx = useContext(wishContext)
    const desc_ctx = useContext(descriptionContext)
    const { item } = props
    const addCartItemHandler = (item) => {
        
        cart_ctx.addItem({
            ...item,
            quantity: 1,
            totalPrice: item.price
        })
    }
    const addWishlistHandler = (item) => {
        wish_ctx.addItem(item)
    }
    const descriptionHandler = (item) => {
        desc_ctx.ToggleFunction()
        desc_ctx.showDescription(item)
    }

    return (
        <>
            <div className='card' key={item._id}>
                <div className="card-body">
                    <img src={item.images[0]} alt='paintings' />
                </div>
                <div className="main--wishlist--card">
                    <span className='heart--icon' onClick={() => {
                        setClicked(true)
                        addWishlistHandler(item)
                    }} >{clicked ? <GoHeart  /> : <CiHeart />}</span>
                    <span className='eye--icon' onClick={() => descriptionHandler(item)}><BsEye /></span>
                </div>
                <div className="main--cart"><h3 className="add-to-cart" onClick={() => addCartItemHandler(item)}>add to cart</h3></div>
                <div className="card-footer py-2">
                    <h3 className="title">{item.title}</h3>
                    <p className="price">Rs. {item.price.toLocaleString()}</p>
                </div>
            </div>
        </>
    )
}