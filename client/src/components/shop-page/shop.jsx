import React, { useEffect, useState } from "react";
import Axios from "axios";

import ShopCategory from "./shop-Category";
import Loader from "../loader";

function Shop() {
  const [fetch, setFetch] = useState([]);
  const [load, setLoad] = useState(false);
  const getData = async () => {
    setLoad(true);
    const data = await Axios.get("http://localhost:5000/category");

    setFetch(data.data);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (load) {
    return (
      <div style={{ paddingTop: "7em" }}>
        <Loader />
      </div>
    );
  }
  return (
    <div style={{ paddingTop: "7em" }}>
      {fetch &&
        fetch.map((item) => {
          return <ShopCategory data={item} key={item._id} />;
        })}
    </div>
  );
}

export default Shop;
