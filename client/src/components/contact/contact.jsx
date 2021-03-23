import React from "react";

import Button from "../input/input";
import "./style.css";
function Contact() {
  return (
    <div class="container5">
      <form>
        <ul>
          <li>
            <Button type="text" id="name" value="Name" name="user_name" />
          </li>
          <li>
            <Button type="email" id="mail" name="user_email" value="Email" />
          </li>
          <li>
            <label for="msg">
              <span>Message</span>
            </label>
            <textarea rows="2" cols="50"></textarea>
          </li>
          <li>
            <input type="submit" className="btn" value="Send" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Contact;
