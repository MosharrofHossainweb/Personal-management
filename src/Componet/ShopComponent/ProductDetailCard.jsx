import React, { useState } from "react";

const ProductDetailCard = ({ 
  images = [], 
  name, 
  description, 
  price, 
  features = [], 
  specifications = [], 
  reviews = {}, 
  options = { sizes: [], colors: [] }
}) => {
  const [currentImage, setCurrentImage] = useState(images[0] || "");

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div style={{ maxWidth: "64rem", width: "100%", backgroundColor: "#fff", borderRadius: ".75rem", boxShadow: "0 .5rem 1.5rem rgba(0,0,0,.1)", overflow: "hidden", transition: "transform .3s ease-in-out" }}>
        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", padding: "1rem" }}>
          <div style={{ flex: "1", overflow: "hidden", marginBottom: "1rem" }}>
            {currentImage ? (
              <img
                src={currentImage}
                alt={name}
                style={{ width: "100%", height: "auto", objectFit: "cover", transition: "transform .5s ease-in-out" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.1)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
            ) : (
              <div style={{ width: "100%", height: "20rem", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#e5e7eb" }}>
                No Image Available
              </div>
            )}
            <div style={{ display: "flex", marginTop: ".5rem", gap: ".5rem", justifyContent: "center" }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`thumbnail-${index}`}
                  style={{ width: "4rem", height: "4rem", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
          </div>

          <div style={{ flex: "1", padding: "1rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", textAlign: "center" }}>{name}</h2>
            <p style={{ color: "#4b5563", textAlign: "center", margin: "1rem 0" }}>{description}</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#6d28d9" }}>BDT {price}</span>
              <span style={{ fontSize: ".875rem", color: "#6b7280", textDecoration: "line-through" }}>
                BDT {(price * 1.2).toFixed(2)}
              </span>
            </div>

            {/* Features */}
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>Features:</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "1rem", color: "#4b5563" }}>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>Specifications:</h4>
              <ul style={{ listStyleType: "disc", paddingLeft: "1rem", color: "#4b5563" }}>
                {specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>Customer Reviews:</h4>
              <p style={{ color: "#4b5563" }}>{reviews.rating} ⭐</p>
              <p style={{ color: "#4b5563" }}>{reviews.text}</p>
            </div>

            {/* Options */}
            <div style={{ marginTop: "1rem" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: "600", color: "#1f2937" }}>Options:</h4>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <select style={{ backgroundColor: "#e5e7eb", padding: ".75rem", borderRadius: ".5rem" }}>
                  {options.sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>
                <select style={{ backgroundColor: "#e5e7eb", padding: ".75rem", borderRadius: ".5rem" }}>
                  {options.colors.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
              <button style={{ flex: "1", backgroundColor: "#6d28d9", color: "#fff", padding: ".75rem 1.5rem", borderRadius: ".5rem", boxShadow: "0 .5rem 1.5rem rgba(0,0,0,.1)", transition: "transform .3s ease-in-out, backgroundColor .3s ease-in-out" }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; e.target.style.backgroundColor = "#4c1d95"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.backgroundColor = "#6d28d9"; }}>
                Add to Cart
              </button>
              <button style={{ flex: "1", backgroundColor: "#e5e7eb", color: "#1f2937", padding: ".75rem 1.5rem", borderRadius: ".5rem", boxShadow: "0 .5rem 1.5rem rgba(0,0,0,.1)", transition: "transform .3s ease-in-out, backgroundColor .3s ease-in-out" }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; e.target.style.backgroundColor = "#d1d5db"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.backgroundColor = "#e5e7eb"; }}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
