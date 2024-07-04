import styles from './Error.module.scss'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <main className={styles.wrapper}>
                <h1 className={styles.wrapper_404}>404</h1>
                <p className={styles.wrapper_Content}>Oups! La page que vous demandez n'existe pas.</p>
                <Link className={styles.wrapper_Link} to='/'>Retourner sur la page d'accueil</Link>
            </main> 
        </div>    
  )
}
