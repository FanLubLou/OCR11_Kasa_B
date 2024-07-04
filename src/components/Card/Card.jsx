import styles from './Card.module.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accommodation/${id}`} className={styles.wrapper}>
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}
