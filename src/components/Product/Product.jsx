import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="book" />

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

      <button type="submit" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
