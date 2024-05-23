import "./index.scss";
import { Link } from "react-router-dom";

import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="container">
          <div className="header">
            <div className="headerleft">
              <h1 className="colo">COLO</h1>
              <h1 className="shop">SHOP</h1>
            </div>
            <div className="headerright">
              <div className="nav">
                <nav>
                  <ul>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>

                    <li>
                      <Link to={"/Shop"}>Shop</Link>
                    </li>

                    <li>
                      <Link to={"/promotion"}>Promotion</Link>
                    </li>

                    <li>
                      <Link to={"/pages"}>Pages</Link>
                    </li>

                    <li>
                      <Link to={"/blog"}>Blog</Link>
                    </li>

                    <li>
                      <Link to={"/addproduct"}>Add Product</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="buttonicons">
                <div className="icon1">
                  <IoSearchSharp className="icon" />
                </div>
                <div className="icon1">
                  <FaUser className="icon" />
                </div>
                <div className="icon1">
                  <BsFillBasket3Fill className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
