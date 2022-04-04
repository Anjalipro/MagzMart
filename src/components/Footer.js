import React from "react";
import "./../styles/footer.css";

const Footer = () => {
  return (
    <div className="contain">
      <div className="row ">
        <div>
          <h3>
            <ul>COMPANY</ul>
          </h3>

          <ul>About us</ul>
          <ul>Contact Us</ul>
        </div>
        <div>
          <h3>
            <ul>NOTICES</ul>
          </h3>

          <ul>Terms Of Use</ul>
          <ul>Privacy Policy</ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
