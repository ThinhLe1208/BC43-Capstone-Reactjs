import React from "react";

import styles from "./styles.module.scss";
import { size } from "lodash";

const PrimaryButton = ({ content, size, fontSize }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        style={{
          padding:
            size === "small"
              ? `8px 12px`
              : size === "large"
              ? `15px 35px`
              : `0`,
          fontSize:
            fontSize === "small" ? `15px` : fontSize === "large" ? `25px` : `0`,
        }}
      >
        {content}
      </button>
    </div>
  );
};

export default PrimaryButton;
