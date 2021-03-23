import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signin } from "../../api/api";
import Button from "../input/input";
import Loader from "../loader";

import "./style.css";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = async () => {
    try {
      if (formData.email && formData.password) {
        const Signup = await signin(formData);
        setLoading(true);
        const userData = await Signup.data;
        localStorage.setItem("profile", JSON.stringify({ userData }));
        setLoading(false);
        history.push("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="login">
      <div className="left-box">
        <h1>new to our shop?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          magnam reiciendis similique saepe adipisci a architecto quis autem
          illo fugit.
        </p>
        <Link to="/signup">
          <input
            className="btn right-create"
            type="submit"
            value="create an account"
          />
        </Link>
      </div>

      <div className="right-box">
        <h1>Welcome back! please Sign in</h1>
        <Button
          type="text"
          value="Email"
          name="email"
          handleChange={handleChange}
        />
        <Button
          type="Password"
          value="password"
          name="password"
          handleChange={handleChange}
        />

        <input
          className="btn"
          type="submit"
          value="Sign in"
          onClick={handleSubmit}
        />

        <Link to="/signup">
          <input
            className="btn clear"
            type="submit"
            value="Create account"
            onClick={handleSubmit}
          />
          {loading && <Loader />}
        </Link>
      </div>
    </section>
  );
}

export default Login;
