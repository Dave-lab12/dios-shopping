import mongoose from "mongoose";
import itemData from "../models/itemData.js";
import { categoryData } from "../models/itemData.js";
import cloudinary from "../utils/cloudinary.js";

export const getItems = async (req, res) => {
  try {
    const ItemData = await itemData.find();
    res.status(200).json(ItemData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCat = async (req, res) => {
  try {
    const ItemCat = await categoryData.find();
    res.status(200).json(ItemCat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createData = async (req, res) => {
  const {
    title,
    description,
    image,
    price,
    gender,
    popular,
    category,
    phoneNumber,
  } = req.body.data;

  const uploadImage = await cloudinary.uploader.upload(image, {
    upload_preset: "dev_setups",
  });

  const imageUrl = await uploadImage.url;
  const imageId = await uploadImage.public_id;
  const newData = new itemData({
    title,
    description,
    image: { image_url: imageUrl, public_id: imageId },
    category,
    price,
    gender,
    popular,
    phoneNumber,
  });

  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const createCategory = async (req, res) => {
  const title = req.body.data;

  const catData = new categoryData({ type: title });
  try {
    await catData.save();
    res.status(201).json(catData);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const updateItem = async (req, res) => {
  const { id } = req.body;
  try {
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No data with id: ${id}`);

      const imageId = await itemData.findById(id);

      await cloudinary.v2.uploader.destroy(
        imageId.image.public_id,
        function (error, result) {
          console.log(result, error);
        }
      );

      const {
        title,
        description,
        image,
        price,
        gender,
        popular,
        category,
      } = req.body;

      const uploadImage = await cloudinary.uploader.upload(image, {
        upload_preset: "dev_setups",
      });
      const imageUrl = await uploadImage.url;
      const newImageId = await uploadImage.public_id;

      const updatedItem = {
        title,
        description,
        image: { image_url: imageUrl, public_id: newImageId },
        price,
        gender,
        popular,
        category,
        _id: id,
      };

      await itemData.findByIdAndUpdate(id, updatedItem, { new: true });

      res.status(201).json(updatedItem);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No data with id: ${id}`);

  const imageId = await itemData.findById(id);

  await cloudinary.v2.uploader.destroy(
    imageId.image.public_id,
    function (error, result) {
      console.log(result, error);
    }
  );
  await itemData.findByIdAndRemove(id);

  res.json({ message: "item deleted successfully." });
};

export const deleteCat = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No data with id: ${id}`);

  await categoryData.findByIdAndRemove(id);

  res.json({ message: "item deleted successfully." });
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No data with id: ${id}`);
  const Product = await itemData.findById(id);
  res.status(200).json(Product);
};
