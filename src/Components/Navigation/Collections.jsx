import { useContext, useEffect } from "react";
import { filterContext } from "../../Context/filter-context";
import Card from "../UI/Card";
import Filter from "../UI/Filter";
import { useParams } from "react-router-dom";
import Description from "../Modal/DescriptionModal";
import { descriptionContext } from "../../Context/description-context";
import { wishContext } from "../../Context/wishlist-context";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../features/products/productSlice";

export default function Collections() {
//   const dispatch = useDispatch();
//   const productState = useSelector(state=>state)
//   console.log(productState.product)
//   const getProducts = () => {
//     dispatch(getAllProducts());
//   };
  const params = useParams();
  const desc_ctx = useContext(descriptionContext);
  const filter_ctx = useContext(filterContext);
  const wish_ctx = useContext(wishContext);

  useEffect(() => {
    // getProducts();
    filter_ctx.filterByCategory(params.id);
  }, [params.id]);

  return (
    <div className="collections container-fluid pt-5">
      <div className="row mt-5">
        <div className="col-lg-3 col-sm-4">
          <Filter />
        </div>
        <div className="col-lg-9 col-sm-8">
          <div className="row">
            {filter_ctx.isLoading && <h3 className="Notify">Loading...</h3>}
            {filter_ctx.updatedItems.length !== 0 &&
              filter_ctx.updatedItems.map((item,idx) => {
                return(
                <div className="col-lg-3" key={item._id}>
                  <Card item={item} />
                </div>
              )})}
            {filter_ctx.updatedItems.length === 0 && !filter_ctx.isLoading && (
              <h3 className="Notify">No item found!</h3>
            )}
          </div>
        </div>
      </div>
      {desc_ctx.modalIsOpen && <Description />}
    </div>
  );
}
