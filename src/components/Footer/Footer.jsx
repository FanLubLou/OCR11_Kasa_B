import styles from './Footer.module.scss'
import logo from '../../assets/logo_footer.png'

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<img src={logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
