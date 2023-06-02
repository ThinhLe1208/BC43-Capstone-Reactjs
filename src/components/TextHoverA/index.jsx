import React from "react";

import styles from "./styles.module.scss";

const TextHover = ({ content, sizeText, colorText }) => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.textHover}
        href="#"
        style={{
          fontSize: sizeText === "large" ? `21px` : `16px`,
        }}
      >
        {content}
      </a>
    </div>
  );
};

export default TextHover;
