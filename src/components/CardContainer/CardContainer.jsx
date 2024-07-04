import styles from'./CardContainer.module.scss';
import { useEffect, useState } from "react";
import { fetchData } from '../../services/dataService';
import Card from '../Card/Card';

export default function Gallery() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const data = await fetchData('accommodationData.json');
        setDatas(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className={styles.wrapper}>
      {datas.map(data => (
        <Card
          key={data.id}
          id={data.id}
          title={data.title}
          cover={data.cover}
        />
      ))}
    </main>
  );
}
