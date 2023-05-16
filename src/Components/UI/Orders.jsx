import React from 'react'
import styles from './Orders.module.css'
import { FaCircle } from 'react-icons/fa'
import img from '../../assets/img/nav--poster--1.jpeg'
import img2 from '../../assets/img/nav--poster--2.jpeg'

const Orders = () => {
    return (
        <div className='row'>
            <h3 className={styles.heading}>Your Orders</h3>
            <div className='col-12'>
                <table className={`table table-bordered ${styles.products}`}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.product} >
                                    <img src={img} alt='cart item' />
                                    <h3>Buddha Poster</h3>
                                </div>
                            </td>
                            <td><h3 className={styles.quantity}>1</h3></td>
                            <td><h3 className={styles.price}>Rs. 4512</h3></td>
                            <td><h3 className={styles.status}><FaCircle />Confirmed</h3></td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.product} >
                                    <img src={img2} alt='cart item' />
                                    <h3>Buddha Poster</h3>
                                </div>
                            </td>
                            <td><h3 className={styles.quantity}>2</h3></td>
                            <td><h3 className={styles.price}>Rs. 5000</h3></td>
                            <td><h3 className={styles.status}><FaCircle />Confirmed</h3></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders