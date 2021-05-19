import React from "react";
import styles from "./card.module.css";

export default ({ flag, productName, Price, inStock, shortDescription }) => {
  return (
    <div className={styles.card}>
      <div className={styles.productContainer}>
        <div>
          <img
            className={styles.productImage}
            src="https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg"
            alt="product"
          />
        </div>
        <div className={styles.productWrap}>
          {flag && (
            <div className={styles.buttonContainer2}>
              <button className={styles.removeButton}>X</button>
            </div>
          )}
          <h2 className={styles.productName}>
            {productName} <span className={styles.productPrice}>${Price}</span>
          </h2>
          <p className={styles.productDescription}>{shortDescription}</p>
          <p className={styles.productAvailability}>7 avalable</p>
        </div>
      </div>
      {!flag && (
        <div className={styles.buttonContainer}>
          <button className={styles.addToCardButton}>Add to cart</button>
        </div>
      )}
    </div>
  );
};

export const Grid = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);
