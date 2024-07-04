import styles from './Banner.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner({ image }) {
  const [page, setPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') { setPage(true) }
      else {
      setPage(false);
      }
  }, [location.pathname]);

  return (
    <section className={styles.wrapper}>
      <img src={image} alt="paysage" className={page ? '' : styles.boxShadow} />
      <div className={styles.wrapper_Text}></div>
      {!page && (
        <h2>
          Chez vous, partout et ailleurs
        </h2>
      )}
    </section>
  );
}
