import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutImage from '../../assets/banner_about.png';
import { fetchData } from '../../services/dataService';

export default function About() {
  const [aboutDatas, setAboutDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await fetchData('aboutData.json');
        setAboutDatas(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchAboutData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.wrapper}>
      <Banner image={AboutImage} />
      <main className={styles.wrapper_main}>
        {aboutDatas.map(data => (
          <section  key={data.id}>                    
          <Collapse title={data.title} content={data.content} />
        </section>
        ))}
      </main>
    </div>
  );
}
