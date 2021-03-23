import React, { useEffect, useState, useRef } from "react";
import { getProduct } from "../../../api/api";
import { BiPhoneCall } from "react-icons/bi";
import "./style.css";
function ProductDetail({ match }) {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  const productId = match.params.productID;
  const GetProduct = async () => {
    setLoader(true);
    const item = await getProduct(productId);
    setProduct(item.data);
    setLoader(false);
  };
  useEffect(() => {
    GetProduct();

    imgRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);
  const imgRef = useRef(null);
  const { image, description, title, price, phoneNumber } = product;

  return (
    <section className="item-detail" ref={imgRef}>
      <img
        className="item-img"
        ref={imgRef}
        src={image?.image_url || null}
        alt="product"
      />
      <div className="details-container">
        <h1>{title}</h1>
        <h3>{price}$</h3>
        <p className="item-desc">{description}</p>
        <div className="contact-container">
          <BiPhoneCall />
          <p>{phoneNumber}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
