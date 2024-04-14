import styles from './Homepage.module.scss'
import Carrossel from 'components/Carrossel'
import seta from 'assets/seta-para-cima-direita.svg'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
    return (
        <div className={styles.corpo}>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <li>Criando idéias</li>
                    <li className={styles.sonhos}>e estampando </li>
                    <button onClick={() => navigate('/Catalogo')}>
                        <label>Vamos lá!</label>
                        <img src={seta} alt='Seta para cima' />
                    </button>
                </div>
                <div className={styles.carousel}>
                    <Carrossel />
                </div>
            </div>
        </div>
    )
}