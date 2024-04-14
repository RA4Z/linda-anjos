import styles from './Homepage.module.scss'
import Carrossel from 'components/Carrossel'

export default function Homepage() {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <Carrossel />
            </div>
        </div>
    )
}