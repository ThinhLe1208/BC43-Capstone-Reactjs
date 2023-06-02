import React from "react";
import { Input } from "antd";

import styles from "./styles.module.scss";
import ErrorMessage from "components/ErrorMessage";

const InputField = ({
  label,
  name,
  value,
  error,
  touched,
  type = "text",
  onChange,
  onBlur,
  colorText,
  colorInput,
  ...rest
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <Input
          className={styles.input}
          name={name}
          id={name}
          value={value}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          status={error && touched ? "error" : ""}
          style={{
            width: "100%",
            color: colorText === "white" ? `white` : `black`,
          }}
          {...rest}
        />
        <label
          className={styles.label}
          style={{ color: colorText === "white" ? `white` : `black` }}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      <div className={styles.error}>
        {error && touched && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    </div>
  );
};

export default InputField;
