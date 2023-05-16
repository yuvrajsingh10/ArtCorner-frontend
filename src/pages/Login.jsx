import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import loginClass from "./loginSignup.module.css";
import CustomformInput from "../Components/Form/CustomformInput";
import { useFormik } from "formik";
import * as yup from "yup";

import { userContext } from "../Context/userContext";

const loginSchema = yup.object({
  email: yup.string().nullable().email("Email should be valid"),
  password: yup.string().required("password is required"),
});

function Login() {
  let navigate = useNavigate();

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const loginUser = useContext(userContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await loginUser.loginUser(values);
      setTimeout(() => {
          setauthenticated(true);
      }, 500);
    },
  });
  useEffect(() => {
    if (localStorage.getItem("token") &&localStorage.getItem("token") !== undefined
    )
      navigate("/");
  }, [authenticated]);
  return (
    <div className="container-fluid vh-50 m-0" style={{ paddingTop: "80px" }}>
      <div className={`row ${loginClass.main__container} p-0 h-100`}>
        
        <div className={`col-lg-6 m-auto ${loginClass.right__pane}`}>
          <div className={`row ${loginClass.right__pane__content}`}>
            <h3 className="text-center my-2">Login</h3>
            <p className="text-center">
              Welcome to Art Corner
            </p>

            <form
              method="POST"
              onSubmit={formik.handleSubmit}
              className="form px-4 my-0 "
            >
              <CustomformInput
                type="email"
                i_id="Email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                i_class={loginClass.form__input}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>

              <CustomformInput
                type="password"
                i_id="password"
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                i_class={loginClass.form__input}
              />
              <div className="error">
                {formik.touched.password && formik.errors.password}
              </div>

              <p className={` my-5 ${loginClass.forget__password} `}>
                <Link to="/forgetpassword">forget password?</Link>
              </p>

              <div className={`${loginClass.submit}`}>
                <input
                  type="submit"
                  className={`btn ${loginClass.submit__btn}`}
                  value="Login"
                />
              </div>

              <p>
                {" "}
                Not a member? <Link to="/register">SingUp</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
