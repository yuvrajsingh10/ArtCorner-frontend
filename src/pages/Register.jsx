import React, { useContext, useState, useEffect } from "react";
import signupClass from "./loginSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import CustomformInput from "../Components/Form/CustomformInput";
import { useFormik } from "formik";
import * as yup from "yup";
// import {useDispatch} from 'react-redux';
// import { registerUser } from '../features/user/userSlice';
import { userContext } from "../Context/userContext";

const signUpSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().nullable().email("Email should be valid"),
  mobile: yup.string().required("mobile no is required"),
  password: yup.string().required("password is required"),
});

function Register() {
  let navigate = useNavigate();
  const signupUser = useContext(userContext);
  // const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      role: "buyer",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      //   dispatch(registerUser(values))
      signupUser.registerUser(values);
      setTimeout(() => {
        if (signupUser.success) {
          navigate("/login");
        }
      }, 500);
    },
  })
  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== undefined
    ) {
      navigate("/");
    }
  });

  return (
    <div className="container-fluid vh-100  p-0">
      <div className={`row ${signupClass.main__container} p-0 h-100`}>
        <div className={`col-lg-6 m-auto ${signupClass.right__pane}`}>
          <div className={`row ${signupClass.right__pane__content}`}>
            <h3 className="text-center my-3 title">Signup</h3>

            <form className="form px-4 my-0" onSubmit={formik.handleSubmit}>
              <div
                className="btn-group my-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className={`btn-check`}
                  name="role"
                  value="buyer"
                  onClick={formik.handleChange("role")}
                  defaultChecked
                />
                <label className={`btn btn-outline-dark`} htmlFor="buyer">
                  Buyer
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="role"
                  onClick={formik.handleChange("role")}
                  id="seller"
                  value="Seller"
                />
                <label className={`btn btn-outline-dark `} htmlFor="seller">
                  Seller
                </label>
              </div>

              <CustomformInput
                type="text"
                i_id="firstName"
                label="First Name"
                name="firstName"
                i_class={signupClass.form__input}
                value={formik.values.firstName}
                onChange={formik.handleChange("firstName")}
                onBlur={formik.handleBlur("firstName")}
              />
              <div className="error">
                {formik.touched.firstName && formik.errors.firstName}
              </div>

              <CustomformInput
                type="text"
                i_id="lastName"
                label="Last Name"
                name="lastName"
                i_class={signupClass.form__input}
                value={formik.values.lastName}
                onChange={formik.handleChange("lastName")}
                onBlur={formik.handleBlur("lastName")}
              />
              <div className="error">
                {formik.touched.lastName && formik.errors.lastName}
              </div>

              <CustomformInput
                type="email"
                i_id="email"
                label="Email Address"
                name="email"
                i_class={signupClass.form__input}
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>

              <CustomformInput
                type="number"
                i_id="mobile"
                i_class={signupClass.form__input}
                label="Mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
              </div>

              <CustomformInput
                type="password"
                i_id="password"
                i_class={signupClass.form__input}
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password}
              </div>

              <div className={`${signupClass.submit}`}>
                <input
                  type="submit"
                  className={`btn ${signupClass.submit__btn}`}
                  value="Signup"
                />
              </div>

              <p className={`${signupClass.forget__password}`}>
                {" "}
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
        {/* <div className={`col-lg-6 ${signupClass.left__pane} `}>
                    <img src="./assets/pexels-ekrulila-9482019.jpg" className="" alt="" srcSet="" />
                </div> */}
      </div>
    </div>
  );
}

export default Register;
