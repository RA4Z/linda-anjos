import styles from './Homepage.module.scss'
import Carrossel from 'components/Carrossel'

export default function Homepage() {
    return (
        <div className={styles.corpo}>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <li>Criando idéias</li>
                    <li className={styles.sonhos}>e estampando </li>
                </div>
                <div className={styles.carousel}>
                    <Carrossel />
                </div>
            </div>
        </div>
    )
}