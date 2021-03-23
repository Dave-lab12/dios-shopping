import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());

import {
  createData,
  getItems,
  deletePost,
  createCategory,
  getCat,
  updateItem,
  getProduct,
  deleteCat,
} from "./controllers/items.js";
import { signin, signup } from "./controllers/user.js";

const PORT = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
import auth from "./middleware/auth.js";

app.post("/create", auth, createData);
app.get("/", getItems);
app.get("/product/:id", getProduct);
app.patch("/update", auth, updateItem);
app.get("/category", getCat);
app.delete("/category/delete", auth, deleteCat);
app.delete("/delete", auth, deletePost);
app.post("/category/create", auth, createCategory);

app.post("/signin", signin);
app.post("/signup", signup);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port:${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
