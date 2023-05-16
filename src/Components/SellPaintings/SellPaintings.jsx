import { useContext, useEffect, useMemo } from "react";
import Wrapper from "../../Components/Layout/Wrapper";
import style from "./style.module.css";
import { userContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
// import CustomformInput from "../Form/CustomformInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { productContext } from "../../Context/ProductContext";

const signUpSchema = yup.object({
  title: yup.string().required("title is required"),
  description: yup.string().required("description is required"),
  price: yup.string().nullable().email("price should be valid"),
  category: yup.string().required("category no is required"),
  images: yup.string().required("image is required"),
});
export default function SellPaintings() {
  const user_utx = useContext(userContext);
  const pdt_ctx = useContext(productContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      images: []
    },
    onSubmit: (values) => {
      pdt_ctx.createProduct(values);
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if (user_utx.user.role !== "Seller") navigate("/");
  }, []);
  return (
    <>
      <Wrapper class="container">
        <div className={`${style.main_box}`}>
          {/* <h1 className="logo mt-5 mb-4">- Art Corner -</h1> */}
          <div className={style.form_box}>
            <h3 className={style.heading}>Fill this form</h3>
            <div className="row">
              <div className="col-lg-7 col-sm-12">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Product Title"
                      name="title"
                      id="title"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                    />
                    <textarea
                      className="px-3 py-2 my-1"
                      name="description"
                      id="description"
                      cols="70"
                      rows="10"
                      placeholder="Product Description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                    ></textarea>

                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                    />

                    <select
                      name="category"
                      onChange={formik.handleChange}
                      value={formik.values.category}
                    >
                      <option disabled selected>
                        Select category
                      </option>
                      <option>Potrait Painting</option>
                      <option>Landscape Painting</option>
                    </select>

                    <input
                      type="file"
                      name="images"
                      onChange={(event) => {
                        formik.setFieldValue("images", event.currentTarget.files[0]);
                      }}
                    />

                    <button className="btn button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
