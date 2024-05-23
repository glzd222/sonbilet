import "./index.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <div>
    <>
    

    <footer id="footer">
        <div className="container">
          <div className="footer">
            <div className="footertop">
              <nav>
                <ul>Blog</ul>
                <ul>FAQs</ul>
                <ul>Contact Us</ul>
              </nav>
              <div className="icons">
                <FaFacebook className="ico" />
                <FaTwitter className="ico" />
                <FaInstagramSquare className="ico" />
                <IoLogoSkype className="ico" />
              </div>
            </div>
            <div className="footerbottom">
              <p>©2018 All Rights Reserverd. This template is made with  by Colorlib</p>
            </div>
          </div>
        </div>
      </footer>
    </>
    </div>
  );
};

export default Footer;
