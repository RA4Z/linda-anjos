import Maps from 'components/Maps'
import styles from './Homepage.module.scss'
import Carrossel from 'components/Carrossel'

export default function Homepage() {
    return (
        <div className={styles.container}>
            <div className={styles.carousel}>
                <Carrossel />
            </div>
            <div className={styles.container__mapa}>
                <div className={styles.container__mapa__header}>
                    <div className={styles.container__mapa__dados}>
                        <li>Schroeder, Santa Catarina, Brasil</li>
                        <li>Rua Marechal Castelo Branco</li>
                        <li>4456, Centro Norte, CEP 89275-000</li>
                    </div>
                    <div className={styles.container__mapa__body}>
                        <Maps />
                    </div>
                </div>
            </div>
        </div>
    )
}