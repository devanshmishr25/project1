import React from "react";
import styles from "./Button.module.css";

function Button() {
  return (
    <>
      <span className="box">
        <button className={styles.btn}>Try it Now</button>
      </span>
    </>
  );
}

export default Button;
