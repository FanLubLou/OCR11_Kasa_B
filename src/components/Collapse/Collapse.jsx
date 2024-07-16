import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import styles from './Collapse.module.scss';

export default function Collapse ({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__toggle} onClick={() => setToggle(!toggle)}>
        <h2>{title}</h2>
        <img 
          className={toggle ? styles.wrapper__toggle__arrowDown : styles.wrapper__toggle__arrowUp} 
          src={arrow} 
          alt={toggle ? "flèche vers le bas" : "flèche vers le haut"} 
        />
      </div>
      {toggle && content && (
        <div className={styles.wrapper__content}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
