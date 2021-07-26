import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://www.dolphinresearch.org.au/wp-content/uploads/2017/12/Shop-Welcome-Web.jpg"
          alt="homeimg"
        />

        <div className="home_row">
          <Product
            title="Startup Guide Brussels Book"
            price={15.99}
            image={
              "https://cdn.shopify.com/s/files/1/0071/9945/7346/products/brussels_startup_guide.png?v=1554923953"
            }
            rating={5}
          />
          <Product
            title="Drill"
            price={34.99}
            image={
              "https://www.flexpowertools.com/media/catalog/product/cache/1671d441f97fceb198eed690825ce72e/f/x/fx1171t-2b_flex_60nm_half_inch_drill_turbo_3q_down_21-0219_onwhite_550.png"
            }
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            title="Watch"
            price={59.99}
            image={
              "https://cdn.opstatics.com/store/20170907/assets/images/events/2021/03/watches/en/us/1920/kv/kv-2.png"
            }
            rating={3}
          />
          <Product
            title="Iphone 12 Pro Max"
            price={1299.99}
            image={
              "https://www.bite.lt/sites/default/files/products/2020-11/ipgone-12-pro-blue-1_7.png"
            }
            rating={4}
          />
          <Product
            title="Camera"
            price={299.99}
            image={
              "http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c"
            }
            rating={1}
          />
        </div>
        <div className="home_row">
          {" "}
          <Product
            title="Basketball Ball"
            price={9.99}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
            }
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
