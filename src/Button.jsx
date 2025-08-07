import React from 'react';
import styles from './Button.module.css';

function Button(){
  return (
    <>
    <button className={styles.btn} > <span> Try it Now </span></button>
    </>
  );
};

export default Button;
