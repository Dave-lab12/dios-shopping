import React, { useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import AddItem from "../../add-item/add-item";
import { AiFillFileAdd } from "react-icons/ai";
import { deleteItem } from "../../../api/api";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import Loader from "../../loader";

function NewArrivals({ data, title, load, error }) {
  const [showModal, setShowModal] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [update, setUpdate] = useState({
    show: false,
    id: "",
    price: "",
    description: "",
    title: "",
    gender: "Male",
    category: "shoe",
    popular: "false",
  });
  const handleDelete = (id) => {
    deleteItem({ id });
    window.location.reload();
  };
  const closeUpdate = () => {
    setUpdate({ ...update, show: false });
  };
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  if (load) {
    return (
      <section className="new-arrivals">
        <h1 className="s-title">{title}</h1>
        <Loader />
      </section>
    );
  }
  if (error) {
    return (
      <section className="new-arrivals">
        <h1 className="s-title">{title}</h1>
        <Loader />
      </section>
    );
  }
  console.log(data);
  return (
    <section className="new-arrivals">
      <h1 className="s-title">{title}</h1>
      {user && <AiFillFileAdd className="add-product" onClick={openModal} />}
      {showModal && <AddItem closeModal={closeModal} />}
      <div className="new-arrivals-image">
        {data &&
          data
            .slice(0)
            .slice(-4)
            .reverse()
            .map((item) => {
              const {
                _id,
                image,
                title,
                price,
                category,
                gender,
                popular,
                description,
                phoneNumber,
              } = item;
              return (
                <div className="new-arrivals-card" key={_id}>
                  <Link to={`/product/${_id}`}>
                    <img className="img-h" src={image.image_url} alt={title} />
                  </Link>
                  <h3>{title}</h3>
                  <p>{price}$</p>
                  {user?.userData && (
                    <AiTwotoneDelete onClick={() => handleDelete(_id)} />
                  )}
                  {user && (
                    <AiTwotoneEdit
                      onClick={() =>
                        setUpdate({
                          show: true,
                          id: _id,
                          price,
                          title,
                          category,
                          gender,
                          popular,
                          description,
                          phoneNumber,
                        })
                      }
                    />
                  )}
                  {update.show && (
                    <AddItem
                      items={update}
                      closeUpdate={closeUpdate}
                      setUpdate={setUpdate}
                    />
                  )}
                </div>
              );
            })}
      </div>
    </section>
  );
}

export default NewArrivals;
