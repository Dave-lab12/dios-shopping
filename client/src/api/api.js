import Axios from "axios";
const API = Axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).userData.token
    }`;
  }
  return req;
});
export const fetchItems = () => API.get("/");
export const getProduct = (id) => API.get(`/product/${id}`);
export const createItem = (data) => API.post("/create", { data });
export const deleteItem = (data) => API.delete("/delete", { data });
export const updateItem = (data) => API.patch("/update", data);
export const fetchCategory = () => API.get("/category");
export const deleteCat = (data) => API.delete("/category/delete", { data });
export const createCategory = (data) => API.post("/category/create", { data });

export const signin = (data) => API.post("/signin", data);
export const signup = (data) => API.post("/signup", data);
