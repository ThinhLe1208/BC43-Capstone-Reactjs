import React from "react";
import { Button, Rate } from "antd";

import styles from "./styles.module.scss";

const InfoA = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{product.name}</h3>
      <Rate />
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.size}>
        <ul>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
        </ul>
      </div>
      <div className={styles.color}>
        Color
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.addCart}>
        <Button style={{ width: "700px", height: "45px" }} type="default">
          Add To Cart
        </Button>
      </div>
      <div className={styles.buyNow}>
        <Button style={{ width: "700px", height: "45px" }} type="primary">
          Buy It Now
        </Button>
      </div>
    </div>
  );
};

export default InfoA;
