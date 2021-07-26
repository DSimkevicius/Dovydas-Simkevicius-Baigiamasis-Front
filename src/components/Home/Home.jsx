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
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          {" "}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
