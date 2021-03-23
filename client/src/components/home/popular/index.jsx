import React from "react";
import Loader from "../../loader";
import { Link } from "react-router-dom";
import "./style.css";
function Popular({ data, load, error }) {
  let filteredItems = data && data.filter((item) => item.popular === "true");

  if (load) {
    return (
      <section className="popular-items">
        <h1 className="s-title">Popular-items</h1>
        <div className="popular-item-container">
          <Loader />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="popular-items">
        <h1 className="s-title">Popular-items</h1>
        <div className="popular-item-container">
          <h1>Error...</h1>
        </div>
      </section>
    );
  }
  return (
    <section className="popular-items">
      <h1 className="s-title">Popular-items</h1>
      <div className="popular-item-container">
        {filteredItems &&
          filteredItems
            .slice(0)
            .slice(-4)
            .reverse()
            .map((items) => {
              const { _id, image, title, price } = items;

              return (
                <div key={_id} className="popular-item-card">
                  <Link to={`/product/${_id}`}>
                    <img
                      className="img-h"
                      src={image.image_url}
                      alt="popular items"
                    />
                  </Link>
                  <h3>{title}</h3>
                  <p>{price}$</p>
                </div>
              );
            })}
      </div>
    </section>
  );
}

export default Popular;
