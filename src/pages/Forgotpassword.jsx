import React, { useContext, useState } from "react";
import CustomformInput from "../Components/Form/CustomformInput";
import { useFormik } from "formik";
import * as yup from "yup";

import { userContext } from "../Context/userContext";

const ForgotpasswordSchema = yup.object({
  email: yup.string().nullable().email("Email should be valid"),
});

function Forgotpassword() {
  const user_ctx = useContext(userContext);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotpasswordSchema,
    onSubmit: async (values) => {
      await user_ctx.forgetPassword(values);
    },
  });
  return (
    <div className="container-fluid section__container py-5">
      <div className="my-5 w-25 rounded-3 mx-auto p-3">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center">
          Please enter your registered email address
        </p>

        <form className="form" method="POST" onSubmit={formik.handleSubmit}>
          <CustomformInput
            type="email"
            i_id="Email"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
          />
          <div className="error">
            {formik.touched.email && formik.errors.email}
          </div>
          <input type="submit" className="button p-3" value="Send link" />
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
