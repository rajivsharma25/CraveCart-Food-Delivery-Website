import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo-container">
            <img src={assets.logo} width={50} className="logo" alt="logo"></img>
            <p className="logo-name">CraveCart</p>
          </div>
          <p>
            CraveCart is your go-to food delivery platform, bringing delicious
            meals from top local restaurants straight to your door—fast, fresh,
            and hassle-free. Satisfy your cravings anytime, anywhere!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Crafted by - Rajiv Sharma</li>
                <li>+91-93056XXXXX</li>
                <li>rajivsharma93056@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} CraveCart. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
