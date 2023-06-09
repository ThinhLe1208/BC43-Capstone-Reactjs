import React from "react";

import styles from "./styles.module.scss";

const CarouselA = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div className={styles.item}>
          <span>abcasdad</span>
          <img
            src="https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group-1859_1_150X150.png?v=1650435849"
            alt={""}
          />
        </div>
        <div className={styles.item}>
          <span>abcasdad</span>
          <img
            src="https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group-1858_1_c6f15036-5902-4b8d-8cae-f7d79cea3ae3_150X150.png?v=1650435835"
            alt={""}
          />
        </div>
        <div className={styles.item}>
          <span>abcasdad</span>
          <img
            src="https://cdn.shopify.com/s/files/1/0567/9169/5421/files/1_1_150X150.png?v=1650435883"
            alt={""}
          />
        </div>
        <div className={styles.item}>
          <span>abcasdad</span>
          <img
            src="https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group-1861_1_150X150.png?v=1650435865"
            alt={""}
          />
        </div>
      </div>
      <button className={styles.next}>Next</button>
      <button className={styles.prev}>Prev</button>
    </div>
  );
};

export default CarouselA;
