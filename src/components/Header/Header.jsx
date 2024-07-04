import styles from'./Header.module.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from "react-router-dom"
import Logo from '../../assets/LOGO.svg'

export default function Header() {
  return (
      <header className={styles.wrapper}>
        <Link to="/">
            <img src={Logo} alt="logo de kasa" />
        </Link>
        <Navbar />
     </header>
  )
}
