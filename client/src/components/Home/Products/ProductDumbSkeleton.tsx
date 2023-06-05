import style from "./Product.module.scss";
import styleSkeleton from "./ProductDumbSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDumbSkeleton = () => {
  return (
    <>
      <section
        className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
        id="products_section"
      >
        <div
          className={`${style.product_images} max-width-500 max-width-desktop-unset`}
          id="product_images"
        >
          <Skeleton className={styleSkeleton.main_image}/>
          <div className={style.left_images}>
            <Skeleton count={3} className={styleSkeleton.image}/>
          </div>
          <div className={style.right_images}>
            <Skeleton count={3} className={styleSkeleton.image}/>
          </div>
          <div className={style.image_slider} id="image_slider">
            <div className={style.slider}></div>
            <div className={style.slider}></div>
            <div className={style.slider}></div>
          </div>
        </div>
        <div
          className={`${style.product_informations} max-width-500 max-width-desktop-unset`}
        >
          <h2
            className={`${styleSkeleton.product_name} text-h2 text-center text-capitalize`}
          >
            <Skeleton />
          </h2>
          <div className={style.product_highlights}>
            <div className={style.product_highlight}>
              <h3 className="text-bold text-h1">
                <Skeleton className="h-8"/>
              </h3>
              <span><Skeleton /></span>
              <p><Skeleton /></p>
            </div>
            <div className={style.product_highlight}>
              <h3 className="text-bold text-h1">
                <Skeleton />
              </h3>
              <span><Skeleton /></span>
              <p><Skeleton /></p>
            </div>
            <div className={style.product_highlight}>
              <h3 className="text-bold text-h1">
                <Skeleton />
              </h3>
              <span><Skeleton /></span>
              <p><Skeleton /></p>
            </div>
          </div>
        </div>
        <div
          className={`${style.product_description} max-width-500 max-width-desktop-unset`}
        >
          <Skeleton count={10}/>
        </div>
        <div className={style.price_cta_wrapper}>
          <div className={style.product_price}>
            <h3>
              <Skeleton />
            </h3>
            <p>
              <Skeleton count={2}/>
            </p>
          </div>

          <div
            className={`${style.product_cta} max-width-500 max-width-desktop-unset`}
          ></div>
        </div>

        <div className={style.other_product} tabIndex={0}>
          <Skeleton />
          <h2 className="text-capitalize">
            <Skeleton />
          </h2>
          <button tabIndex={-1}>
            <Skeleton circle />
          </button>
        </div>
        <div className={style.other_product} tabIndex={0}>
          <Skeleton />
          <h2 className="text-capitalize">
            <Skeleton />
          </h2>
          <button tabIndex={-1}>
            <Skeleton circle />
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDumbSkeleton;
