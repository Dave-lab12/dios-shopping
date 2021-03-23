import React, { useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { deleteCat } from "../../../api/api";

function ShopCategory({ data }) {
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleDelete = (id) => {
    deleteCat({ id });
    window.location.reload();
  };
  return (
    <section className="cat-container">
      <ul className="items-cont">
        <li className="submenu">
          <Link to={`/category/${data.type}`}>{data.type}</Link>
          <br />
        </li>
        {user && (
          <AiTwotoneDelete
            className="delete-svg"
            onClick={() => handleDelete(data._id)}
          />
        )}
      </ul>
    </section>
  );
}

export default ShopCategory;
