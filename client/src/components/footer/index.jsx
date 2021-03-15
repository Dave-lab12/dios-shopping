import React from 'react'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare,FaTelegramPlane} from 'react-icons/fa'
import './style.css'
function Footer() {
    return (
        <section className="footer">
        <div className="warning-container">
          <RiSecurePaymentFill/>
          <div className="warning-text">
            <h2>payment system and delivery</h2>
            <p>
              For now you can call us and we will deliver the item to your
              location
            </p>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-paragraph">
            <h1>Dios</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
              temporibus.
            </p>
          </div>
          <div className="footer-quick-links">
            <h5>Quick links</h5>
            <ul>
              <li><a href="#s">About</a></li>
              <li><a href="#s">Login</a></li>
              <li><a href="#s">Shop</a></li>
              <li><a href="#s">contact us</a></li>
            </ul>
          </div>
          <div className="footer-new-products">
            <h5>new products</h5>
            <ul>
              <li><a href="#s">womans cloth</a></li>
              <li><a href="#s">fashion accessories</a></li>
              <li><a href="#s">man accessories</a></li>
              <li><a href="#s">contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright ©2021 All rights reserved | Dios.</p>
          <div className="footer-copy-images">
            <AiFillFacebook/>
            <FaInstagramSquare />
            <FaTelegramPlane/>
          </div>
        </div>
      </section>
    )
}

export default Footer
