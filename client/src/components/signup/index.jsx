import React, { useState } from "react";
import Button from "../input/input";

import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { signup } from "../../api/api";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.password
      ) {
        const Signup = await signup(formData);
        setUserData(Signup?.data);
        console.log(userData);
        history.push("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  localStorage.setItem("profile", JSON.stringify({ userData }));
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="login">
      <div className="left-box">
        <h1>Already have an account ?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          magnam reiciendis similique saepe adipisci a architecto quis autem
          illo fugit.
        </p>
        <Link to="/login">
          <input className="btn right-create" type="submit" value="sign in" />
        </Link>
      </div>

      <div className="right-box">
        <h1>Welcome back! please Sign in</h1>
        <Button
          type="text"
          value="First Name"
          name="firstName"
          handleChange={handleChange}
        />
        <Button
          type="text"
          value="Last Name"
          name="lastName"
          handleChange={handleChange}
        />

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
          value="Sign up"
          onClick={handleSubmit}
        />

        <input
          className="btn clear"
          type="submit"
          value="Create account"
          onClick={handleSubmit}
        />
      </div>
    </section>
  );
}

export default Signup;
