import Title from '../Layout/Title'
import img2 from '../../assets/img/user.avif'
import style from './Profile.module.css'
import Dashboard from './Dashboard'
import { useContext, useEffect, useState } from 'react'
import Orders from './Orders'
import { userContext } from '../../Context/userContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    let navigate = useNavigate();

    const [authenticated, setauthenticated] = useState(
      localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const user_ctx = useContext(userContext)
    const [dashboard, setDashboard] = useState(true)
    const [orders, setOrders] = useState(false)


    useEffect(() => {
        if (
          !(localStorage.getItem("token") &&
          localStorage.getItem("token") !== undefined)
        )   navigate("/login");
      }, []);
    return (
        <div className={`${style.profile}`}>
            <div className={`${style.hero_image} container-fluid`}>
                <Title title='My account' />
            </div>
            <div className='container mt-5'>
                <div className={`row ${style.user_profile} align-items-start`}>
                    <div className='col-lg-4 d-flex justify-content-center'>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center align-item-center'><img src={img2} alt='' /></div>
                            <div className='col-12'>
                                <table className='table table-bordered table-striped mt-5'>
                                    <tbody>
                                        <tr><td className={`p-2 ${style.profile_link}`} onClick={() => {
                                            setDashboard(true)
                                            setOrders(false)
                                        }}>Dashboard</td></tr>
                                        <tr><td className={`p-2 ${style.profile_link}`} onClick={() => {
                                            setOrders(true)
                                            setDashboard(false)
                                        }}>Orders</td></tr>
                                        <tr><td className={`p-2 ${style.profile_link}`} onClick={user_ctx.logoutUser}>Logout</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-8 ${style.account}`}>
                        {dashboard && <Dashboard />}
                        {orders && <Orders />}
                    </div>
                </div>
            </div>
        </div >
    )
}