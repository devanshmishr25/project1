import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Slider.module.css";

function Slider() {
  return (
    <>
      <Marquee gradient={false} speed={100} pauseOnHover >
          <span className={styles.logo}>LOGO</span>
          <span className={styles.logo}>LOGO</span>
          <span className={styles.logo}>LOGO</span>
          <span className={styles.logo}>LOGO</span>
          <span className={styles.logo}>LOGO</span>
       </Marquee>
    </>
  );
}

export default Slider;
