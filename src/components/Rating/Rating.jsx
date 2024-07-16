import GreyStar from '../../assets/Grey_Star.svg';
import RedStar from '../../assets/Red_Star.svg';
import styles from './Rating.module.scss'

export default function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const starPosition = index + 1;
                return (
                    <img className={styles.star} key={index} src={starPosition <= rating ? RedStar : GreyStar} alt="Etoile" />                       
                )
            })}
        </div>
    )
}