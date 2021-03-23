import React, { useState } from "react";
import "./styles.css";
import decode from "jwt-decode";
// import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navigation() {
  const [click, setClick] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const token = user?.userData?.token;
  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  }
  return (
    <div className="nav-header">
      <nav>
        <h1>DIOS.</h1>
        <AiOutlineMenu onClick={() => setClick(true)} className="nav-burger" />
        <AiOutlineClose
          onClick={() => setClick(false)}
          className={`t ${click ? "exit-btn" : ""}`}
        />
        <ul className={`nav-items ${click ? "tes " : ""}`}>
          <li>
            <Link to="/">home </Link>
          </li>
          <li>
            <Link to="/category">Category </Link>
          </li>
          <li>
            <Link to="/contact">contact </Link>
          </li>
          {user?.userData ? (
            <li>
              <Link to="" onClick={logout}>
                logout{" "}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">login </Link>
            </li>
          )}
        </ul>
        <div className="nav-icons">
          {/* <BsSearch className="nav-search" /> */}
          {/* <AiFillHeart className="nav-fav"/> */}
          {user?.userData ? <p>{user?.userData?.result?.name}</p> : ""}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
