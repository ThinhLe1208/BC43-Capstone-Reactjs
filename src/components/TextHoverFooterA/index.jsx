import React from "react";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const TextHoverFooter = ({ content, sizeText, className }) => {
  return (
    <div className={styles.wrapper}>
      <Link
        to="#"
        style={{
          fontSize: sizeText === "large" ? `21px` : `16px`,
        }}
        className={styles.textHover + " " + className}
      >
        {content}
      </Link>
    </div>
  );
};

export default TextHoverFooter;
