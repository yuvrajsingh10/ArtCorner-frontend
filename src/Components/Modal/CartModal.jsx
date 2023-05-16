import Wrapper from "../Layout/Wrapper"
import Button from "../Button/Button"
import style from './Modal.module.css'
import { cartContext } from "../../Context/cart-context"
import { useContext, useEffect, useMemo } from "react"
import EmptyCard from "../Layout/EmptyCard"
import { Link, useNavigate } from "react-router-dom"


export default function CartModal() {
    const navigate = useNavigate();
    const ctx = useContext(cartContext)
    useMemo(()=>{
        ctx.displayCart();
    },[])
    return (
        <div className={style.modal}>
            <Wrapper class='container'>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center align-items-center'>
                        <div className={`container ${style.modal_box} shadow-sm`}>
                            <button onClick={ctx.ToggleFunction} className={`btn ${style.close_btn}`}>X</button>
                            <h3 className={style.heading}>Your Cart</h3>
                            <div className="row pt-5">
                                <div className='col-12'>
                                    {(ctx.items.length !== 0) &&
                                        <>
                                            <table className='table table-stripped'>
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {ctx?.items?.map(item => (
                                                        <tr className='products_list' key={item._id}>
                                                            <td className={style.products}>
                                                                <div className={style.product} >
                                                                    <img src={item?.producId?.images[0]} alt='cart item' />
                                                                    <h3>{item?.productId?.title}</h3>
                                                                </div>
                                                            </td>
                                                            <td><h3 className={style.price}>Rs. {item?.productId?.price}</h3></td>
                                                            <td>
                                                                <div className={style.quantity}>
                                                                    <button className={`btn ${style.inc_dec}`}
                                                                        onClick={() => ctx.removeItem({item,
                                                                            quantity:item.quantity,price:item.price})} >-</button>
                                                                    {item?.quantity}
                                                                    <button className={`btn ${style.inc_dec}`} onClick={() => ctx.addItem(
                                                                        item.productId
                                                                    )}>+</button>
                                                                </div>
                                                            </td>
                                                            <td><h3 className={style.price}>Rs. {item?.price}</h3></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <div className={style.subtotal}>
                                                <h3>SUBTOTAL:</h3><span>RS. {ctx?.subTotal.toLocaleString()}</span>
                                                <p>Taxes, shipping and discounts codes calculated at checkout</p>
                                            </div>
                                            {/* <Button title='CHECK OUT' /> */}
                                                <Link className="btn button mt-4" onClick={ctx.ToggleFunction} to={ctx.items.lenght !==0 ?"/checkout":""}>CHECK OUT</Link> 
                                        </>
                                    }
                                    {(ctx.items.length === 0 || ctx.items === null || ctx.items === undefined) &&
                                      <EmptyCard title='Your Cart is Empty' />  
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}