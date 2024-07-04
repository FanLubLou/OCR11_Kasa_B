import styles from'./Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {    
    const currentRoute = useLocation();
    return (
        <nav>
            <ul className={styles.wrapper}>
                <li className={currentRoute.pathname === '/' ? styles.wrapper_elt_active : styles.wrapper_elt}>
                    <Link to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute.pathname === '/about' ? styles.wrapper_elt_active : styles.wrapper_elt}>
                    <Link to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
