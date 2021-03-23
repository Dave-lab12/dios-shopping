import React, { useEffect, useState } from "react";
import "./style.css";
import FileBase from "react-file-base64";

import { AiFillCloseCircle } from "react-icons/ai";
import {
  createItem,
  updateItem,
  fetchCategory,
  createCategory,
} from "../../api/api";
import Loader from "../loader";

function AddItem({ closeModal, items, closeUpdate, setUpdate }) {
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState("");
  const [notify, setNotify] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    id: items && items.id,
    image: "",
    price: items ? items.price : "",
    description: items ? items.description : "",
    title: items ? items.title : "",
    gender: items ? items.gender : "Male",
    category: items ? items.category : "shoe",
    popular: items ? items.popular : "false",
    phoneNumber: items ? items.phoneNumber : "",
  });
  const sendData = async () => {
    if (
      data.image &&
      data.price &&
      data.description &&
      data.title &&
      data.gender &&
      data.category &&
      data.phoneNumber
    ) {
      setLoading(true);
      const res = await createItem(data);
      if (res.status === 201) {
        setLoading(false);
        setNotify(true);
      }
    } else {
      console.log("please fill all the form");
    }
  };
  const updateData = async () => {
    if (
      data.image &&
      data.price &&
      data.description &&
      data.title &&
      data.gender &&
      data.category &&
      data.phoneNumber
    ) {
      setLoading(true);
      const res = await updateItem(data);
      setLoading(false);
      if (res.status === 201) {
        setNotify(true);
      }
    } else {
      console.log("please fill all the form");
    }
  };
  const sendCategory = async () => {
    const cat = category.trim().toLocaleLowerCase();
    const data = await createCategory(cat);
    if (data.status === 201) {
      setNotify(true);
    }
  };
  const getCategory = async () => {
    const list = await fetchCategory();
    setCategoryList(list.data);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getCategory();
    setInterval(() => {
      setNotify(false);
    }, 8000);
  }, []);

  return (
    <div className="wrapper">
      <div className="container2">
        <AiFillCloseCircle
          className="close"
          onClick={items ? closeUpdate : closeModal}
        />
        <div className="h">
          <h1>{`${items ? "update Product" : "add a new product"}`}</h1>
          <input
            type="text"
            className="G"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="title"
          />
          <input
            type="text"
            className="G"
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="description"
          />
          <input
            type="number"
            className="G"
            name="price"
            value={data.price}
            onChange={handleChange}
            placeholder="price"
          />
          <input
            type="number"
            className="G"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
            placeholder="Phone number"
          />
          <FileBase
            className="G"
            type="file"
            multiple={false}
            onDone={({ base64 }) => setData({ ...data, image: base64 })}
          />
        </div>
        <div className="A">
          <select
            name="gender"
            className="G"
            value={data.gender}
            id=""
            onChange={handleChange}
          >
            <option value="male" defaultValue="selected">
              Male
            </option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
          <select
            name="category"
            className="G"
            value={data.category}
            id=""
            onChange={handleChange}
          >
            {categoryList &&
              categoryList.map((item) => {
                return (
                  <option key={item._id} value={item.type}>
                    {item.type}
                  </option>
                );
              })}
          </select>
          <select
            name="popular"
            className="G"
            value={data.popular}
            id=""
            onChange={handleChange}
          >
            <option value="true" defaultValue="selected">
              true
            </option>
            <option value="false">false</option>
          </select>
          <input
            type="submit"
            className="B"
            onClick={items ? updateData : sendData}
            value={`${items ? "update a value" : "add items"}`}
          />
        </div>
      </div>
      <div className="add-category">
        <h1>Add Category</h1>
        <input
          type="text"
          className="G cat"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="B" onClick={sendCategory}>
          Add category
        </button>
      </div>
      {notify && (
        <span className="notification re">{`${
          items ? "Product Updated" : "Item Added"
        }`}</span>
      )}
      {loading && <Loader />}
    </div>
  );
}

export default AddItem;
