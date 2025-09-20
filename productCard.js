import React from "react";

function ProductCard({ name, price, inStock }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        Status: {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
