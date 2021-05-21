import React from "react";
import styles from "./card.module.css";

export default ({
  flag,
  id,
  productName,
  Price,
  inStock,
  shortDescription,
  onCartProduct,
  onRemove,
}) => {
  return (
    <div className={styles.card}>
      {flag && (
        <div className={styles.buttonContainer2}>
          <button className={styles.removeButton} onClick={() => onRemove(id)}>
            X
          </button>
        </div>
      )}
      <div className={styles.productContainer}>
        <div>
          <img
            className={styles.productImage}
            src="https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg"
            alt="product"
          />
        </div>
        <div className={styles.productWrap}>
          <h2 className={styles.productName}>
            {productName} <span className={styles.productPrice}>${Price}</span>
          </h2>
          <p className={styles.productDescription}>{shortDescription}</p>
          {!flag &&
            (inStock === 0 ? (
              <p className={styles.productNotAvailability}>Out Of stock</p>
            ) : (
              <p className={styles.productAvailability}>{inStock} avalable</p>
            ))}
          {flag && (
            <p className={styles.productAvailability}>{inStock} in Cart</p>
          )}
        </div>
      </div>

      {!flag && (
        <div className={styles.buttonContainer}>
          <button
            className={styles.addToCardButton}
            onClick={() =>
              onCartProduct({
                _id: id,
                productName: productName,
                Price: Price,
                count: 1,
                shortDescription: shortDescription,
              })
            }
          >
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export const Grid = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);
