import Maps from 'components/Maps'
import styles from './Homepage.module.scss'

export default function Homepage() {
    return (
        <div className={styles.container}>
            <h2>Homepage</h2>

            <div className={styles.container__mapa}>
                <Maps />
            </div>
        </div>
    )
}