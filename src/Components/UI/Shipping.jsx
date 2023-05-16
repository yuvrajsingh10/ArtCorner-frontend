import React, { useContext, useEffect, useMemo } from "react";
import Wrapper from "../Layout/Wrapper";
import style from "./Shipping.module.css";
import img from "../../assets/img/nav--poster--1.jpeg";
import img2 from "../../assets/img/nav--poster--2.jpeg";
import { cartContext } from "../../Context/cart-context";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Context/userContext";
import { useFormik } from "formik";
import * as yup from "yup";

const shippingAddressSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().nullable().email("Email should be valid"),
  mobile: yup.string().required("mobile no is required"),
  address: yup.string().required("address is required"),
  apartment: yup.string().required("apartment is required"),
  city: yup.string().required("city is required"),
  state: yup.string().required("state is required"),
  pincode: yup.string().required("pincode is required"),
});

const Shipping = () => {
  const user_ctx = useContext(userContext);
  const cart_ctx = useContext(cartContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: shippingAddressSchema,
    onSubmit:async (values) => {
      console.log(values);
    },
  });

  const fetchProductData = () => {};

  useEffect(() => {
    // if (cart_ctx.items.length == 0) {
    //     navigate('/')
    // }
    fetchProductData();
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-lg-6 ${style.first_half}`}>
          <Wrapper class="container-fluid">
            <div className={`${style.main_box}`}>
              {/* <h1 className='logo mt-5 mb-4' >- Art Corner -</h1> */}
              <div className={style.form_box}>
                <h3 className={style.heading}>Shipping address</h3>
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <form method="POST"
                      onSubmit={formik.handleSubmit}>
                      <div className={style.input_box}>
                        <input
                          type="text"
                          placeholder="First name"
                          value={user_ctx.user.firstName}
                          readOnly
                        />
                        <input
                          type="text"
                          placeholder="Last name"
                          value={user_ctx.user.lastName}
                          readOnly
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          value={user_ctx.user.email}
                          readOnly
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder="Phone"
                          id="mobile"
                          name="mobile"
                          value={
                            formik.values.mobile
                              ? formik.values.mobile
                              : user_ctx.user.mobile
                          }
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={style.address}>
                        <input
                          type="text"
                          placeholder="Address"
                          id="Address"
                          name="Address"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                        />
                        <input
                          type="text"
                          placeholder="Apartment, suite, etc. (optional)"
                          id="apartment"
                          name="apartment"
                          value={formik.values.apartment}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className={style.input_box}>
                        <input
                          type="text"
                          placeholder="City"
                          id="city"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                        />

                        <select
                          id="state"
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                        >
                          <option disabled>State</option>
                          <option value={"Madhya Pradesh"}>
                            Madhya Pradesh
                          </option>
                          <option value={"Maharashtra"}>Maharashtra</option>
                          <option value={"Gujarat"}>Gujarat</option>
                          <option value={"Assam"}>Assam</option>
                        </select>
                        <input
                          placeholder="PIN code"
                          id="pincode"
                          name="pincode"
                          value={formik.values.pincode}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div>
                      <button type="reset" className="btn button p-2 my-4">
                        Continue Shipping
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
        <div className="col-lg-6 mt-5">
          <div className={`${style.second_half}`}>
            <table className="table mt-5">
              <tbody>
                {cart_ctx.items.map((item) => {
                  return (
                    <tr className={style.tr} key={item._id}>
                      <td>
                        <div className={style.product}>
                          <img src={item.productId.images[0]} alt="cart item" />
                          <h3>{item.productId.title}</h3>
                        </div>
                      </td>
                      <td>
                        <h3 className={style.price}>
                          Rs. {item.productId.price}
                        </h3>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tbody>
                <tr className={style.trs}>
                  <td>
                    <h3>Subtotal:</h3>
                  </td>
                  <td>
                    <h3 className={style.price}>Rs. {cart_ctx.subTotal}</h3>
                  </td>
                </tr>
                <tr className={style.trs}>
                  <td>
                    <h3>Estimated taxes:</h3>
                  </td>
                  <td>
                    <h3 className={style.price}>
                      Rs. {(cart_ctx.subTotal * 12) / 100}
                    </h3>
                  </td>
                </tr>
                <tr className={style.trs}>
                  <td>
                    <h3>Total:</h3>
                  </td>
                  <td>
                    <h3 className={style.price}>
                      Rs.{" "}
                      {parseFloat(cart_ctx.subTotal) +
                        parseFloat((cart_ctx.subTotal * 12) / 100)}
                    </h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
