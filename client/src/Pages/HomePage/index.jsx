import Meta from "antd/es/card/Meta";
import "./index.scss";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getAllData } from "../../Services";
import { FaTruck } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { BsStopwatch } from "react-icons/bs";
import {Helmet} from "react-helmet";


const HomePage = () => {
  const [product, setproduct] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setproduct(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
   <>
<Helmet>
                <meta charSet="utf-8" />
                <title>ecommerce </title>
                <link rel="icon" type="image/svg+xml" href="https://dynamic.brandcrowd.com/asset/logo/937e0eec-eebf-4294-9029-41619d6c3786/logo-search-grid-1x?logoTemplateVersion=1&v=638369310055500000" />

                
            </Helmet>

    <div>
      <section id="section1">
        <div className="section1">
          <div className="middle">
            <div className="p">
              <p>SPRING / SUMMER COLLECTION 2017</p>
            </div>
            <div className="h1">
              <p>Get up to 30% Off New Arrivals</p>
            </div>
            <div className="button">
              <button type="submit">Shop Now</button>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <div className="container">
          <div className="section2">
            <div className="imgs">
              <div className="img1">
                <button>WOMEN`S DAY</button>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
                  alt=""
                />
              </div>
              <div className="img1">
                <button>ACCESSOR IESS</button>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
                  alt=""
                />
              </div>
              <div className="img1">
                <button>MENS</button>
                <img
                  src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container">
          <div className="section">
            <h1>NEW ARRIVALS</h1>
            <Row gutter={16}>
              {product &&
                product.map((w) => {
                  return (
                    <Col className="gutter-row" span={4} key={w._id} lg={6}>
                      <Card
                        hoverable
                        cover={<img alt="example" src={w.imageUrl} />}
                      >
                        <Meta title={w.title} description={w.price} />
                      </Card>
                      <div></div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="container">
          <div className="section">
            <h1>BEST SELLER</h1>
            <hr />
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <p>$520.00</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/coloshop/images/product_2.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <p>$620.00</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/coloshop/images/product_3.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <p>$120.00</p>
                </Card>
              </Col>
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/coloshop/images/product_4.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  <p>$410.00</p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section id="section5">
        <div className="container">
          <div className="shipping">
            <div className="shipping1">
              <div className="icon">
                <FaTruck className="ic" />
              </div>
              <div className="text">
                <h2>SHIPPING</h2>
                <p>Suffered Alteration in Some Form</p>
              </div>
            </div>

            <div className="shipping2">
              <div className="icon">
                <FaMoneyCheckDollar className="ic" />
              </div>
              <div className="text">
                <h2>CACH ON DELIVERY</h2>
                <p>The Internet Tend To Repeat</p>
              </div>
            </div>

            <div className="shipping3">
              <div className="icon">
                <FaRepeat className="ic" />
              </div>
              <div className="text">
                <h2>45 DAYS RETURN</h2>
                <p>Making it Look Like Readable</p>
              </div>
            </div>

            <div className="shipping4">
              <div className="icon">
                <BsStopwatch className="ic" />
              </div>
              <div className="text">
                <h2>OPENING ALL WEEK</h2>
                <p>8AM - 09PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section6">
        <div className="container">
          <div className="blog">
            <h1>Latest Blog</h1>
            <br />
            <hr />
            <br />

            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg"
              alt=""
            />
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="section7">
        <div className="container">
          <div className="newsletter">
            <div className="left">
              <h1>Newsletter</h1>
              <p>
                Subscribe to our newsletter and get 20% off your first purchase
              </p>
            </div>
            <div className="right">
              <input type="text" placeholder="Your Mail" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </section>
    </div>
   
   </>
  );
};

export default HomePage;
