import * as React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Product.css";

const Product = ({ product }) => {
  const { model, img, description, price, brand, _id } = product;
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div
      className="product-card"
      style={{
        margin: "10px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        padding: "10px",
        borderRadius: "5px",
      }}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div>
        <img style={{ width: "100%", borderRadius: "3%" }} src={img} alt="" />
      </div>
      <div>
        <p style={{ textAlign: "right", fontWeight: "600" }}>{brand}</p>
      </div>
      <div>
        <h4 style={{ color: "blue", fontWeight: "500" }}>{model}</h4>
      </div>
      <div>
        <p
          style={{
            fontWeight: "300",
            textAlign: "justify",
            marginBottom: "5px",
          }}
        >
          {description}
        </p>
      </div>
      <div>
        <h5 style={{ textAlign: "left", marginBottom: "20px" }}>
          Price: {price}$
        </h5>
      </div>
      <div>
        <Link
          style={{
            alignItems: "center",
          }}
          to={`/purchase/${_id}`}
        >
          <button class="button-70" role="button">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
