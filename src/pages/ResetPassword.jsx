import React, { useState } from 'react'
import CustomformInput from '../Components/Form/CustomformInput'

const ResetPassword = () => {
    const [user, setUser] = useState({ password: "", confirmpassword: "" });

    const resetPass = (event) => {
        event.preventDefault()
        const { email, password } = user
        fetch("api/user/resetpassword", {
            method: "POST",
            body: JSON.stringify({
                password
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div className='container-fluid section__container py-5'>
            <div className="my-5 w-25 rounded-3 mx-auto p-3">
                <h3 className="text-center title" >Reset Password</h3>
                <p className="text-center">Please enter your new password </p>
                <form action="" method='POST' className="form" onSubmit={resetPass}>
                    <CustomformInput type="password" label="New Password" name="password" id="password"/>
                    <CustomformInput type="password" label="Confirm Password" name="confirmpassword" id="confirmpassword"/>
                </form>
                <input type="submit" className='button' value="Reset Password" />
            </div>
        </div>
    )
}

export default ResetPassword