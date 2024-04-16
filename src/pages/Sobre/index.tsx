import styles from './Sobre.module.scss'
import Slogan from 'assets/Slogan.svg'

export default function Sobre() {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <img src={Slogan} alt='Slogan' />
            </div>
            <div className={styles.carousel}>
                <li>
                    Trabalhamos com personalização e sublimação desde o dia 16 de novembro de 2015, iniciamos nossa jornada na cidade de Peruíbe -SP, nos mudamos para Schroeder - SC no dia 20 de Janeiro de 2021, onde tivemos um novo recomeço, buscando qualidade na entrega e confiaça no que se faz. Realizamos sublimações e personalizações de canecas, camisetas, bonés, materiais, garrafas, entre outros. No envie sua ideia e montaremos uma arte exclusiva para você.
                </li>
            </div>
        </div>
    )
}