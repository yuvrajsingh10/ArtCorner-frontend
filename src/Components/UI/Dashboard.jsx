import React, { useContext } from 'react'
import style from './Profile.module.css'
import { AiOutlineLogout } from 'react-icons/ai'
import { userContext } from '../../Context/userContext'

const Dashboard = () => {
    const user_ctx = useContext(userContext)
    return (
        <>
            <h3>Hello <span>Aakanksha Mahajan</span></h3>
            <div className={style.acc_details}>
                <h5>Account details:</h5>

                <table className='table table-bordered'>
                    <tbody className={style.tbody}>
                        <tr>
                            <td className="text-left"><strong>Name:</strong></td>
                            <td>Aakanksha Mahajan</td>
                        </tr>
                        <tr>
                            <td className="text-left"><strong>E-mail:</strong></td>
                            <td>aakansha71089@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="text-left"><strong>Address:</strong></td>
                            <td>Some street, 1245 Some city</td>
                        </tr>
                        <tr>
                            <td className="text-left"><strong>Address 2:</strong></td>
                            <td>Some street, 1245 Some city</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className={style.logout} onClick={user_ctx.logoutUser} >Logout <AiOutlineLogout /></h3>
            </div>
        </>
    )
}

export default Dashboard