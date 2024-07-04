import styles from './Accommodation.module.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from '../../services/dataService';
import Gallery from "../../components/Gallery/Gallery";
import Error from '../Error/Error';
import InfoAccommodation from '../../components/InfoAccommodation/InfoAccommodation';

export default function Accommodation() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [imageSlider, setImageSlider] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchAccommodationData = async () => {
            try {
                const data = await fetchData('accommodationData.json');
                const dataCurrentAccomodation = data.find(data => data.id === id);
                if (dataCurrentAccomodation) {
                    setData(dataCurrentAccomodation);
                    setImageSlider(dataCurrentAccomodation.pictures);
                } else {
                    setData(null);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchAccommodationData();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <Error />;
    }

    const { title, location, host, rating, description, equipments, tags } = data;

    return (
        <div className={styles.wrapper}>
            <Gallery Images={imageSlider} />
            <main className={styles.wrapper_main}>
                <InfoAccommodation 
                    title={title}
                    description={description}
                    equipments={equipments}
                    location={location}
                    hostName={host.name}
                    tags={tags}
                    hostPicture={host.picture}
                    rating={rating}
                />
            </main>
        </div>
    );
}
