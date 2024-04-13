import AddCarrinho from 'assets/add_carrinho.svg'
import Check from 'assets/check.svg'
import RemoveCarrinho from 'assets/remove_carrinho.svg'
import Info from 'assets/info.svg'

import { formatoMoneyBR } from 'utils'
import styles from './ProductCard.module.scss'

export default function ProductCard() {
    function adicionar() {
        const bottomElements = document.querySelectorAll(`.${styles.bottom}`) as NodeListOf<HTMLElement>;
        bottomElements.forEach((element) => {
            element.style.transform = 'translateX(-50%)';
        });
    }

    function remover() {
        const bottomElements = document.querySelectorAll(`.${styles.bottom}`) as NodeListOf<HTMLElement>;
        bottomElements.forEach((element) => {
            element.style.transform = 'translateX(0)';
        });
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.top}></div>
                <div className={styles.bottom}>
                    <div className={styles.left}>
                        <div className={styles.details}>
                            <h1>Cadeira</h1>
                            <p>{formatoMoneyBR.format(250)}</p>
                        </div>
                        <div onClick={() => adicionar()} className={styles.buy}><img src={AddCarrinho} alt='Adicionar item ao Carrinho' /></div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.done}><img src={Check} alt='Confirmado' /></div>
                        <div className={styles.details}>
                            <p>Item adicionado ao seu carrinho</p>
                        </div>
                        <div onClick={() => remover()} className={styles.remove}><img src={RemoveCarrinho} alt='Remover item do Carrinho' /></div>
                    </div>
                </div>

            </div>
            <div className={styles.inside}>
                <div className={styles.icon}><img src={Info} alt='Informações' /></div>
                <div className={styles.contents}>
                    <table>
                        <tr>
                            <th>Largura</th>
                            <th>Altura</th>
                        </tr>
                        <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}