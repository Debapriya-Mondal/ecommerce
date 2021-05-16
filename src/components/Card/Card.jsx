import React from 'react';
import styles from './card.module.css';

export default () => {
    return (
        <div className={styles.card}>
            <div className={styles.productContainer}>
                <div>
                    <img className={styles.productImage} src="https://off.com.ph/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg" alt="product" />
                </div>
                <div className={styles.productWrap}>
                    <h2 className={styles.productName}>Show <span className={styles.productPrice}>$199.99</span></h2>
                    <p className={styles.productDescription}>Assign arrow function to a variable before exporting as module default</p>
                    <p className={styles.productAvailability}>7 avalable</p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.addToCardButton}>Add to cart</button>
            </div>
        </div>
    )
}

export const Grid = ({ children }) => (
    <div className={styles.grid}>{children}</div>
)