import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <img
        src="https://cdn.shopify.com/s/files/1/0071/9945/7346/products/brussels_startup_guide.png?v=1554923953"
        alt="book"
      />

      <p>{title}</p>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>

      <button type="submit">Add to Cart</button>
    </div>
  );
}

export default Product;
