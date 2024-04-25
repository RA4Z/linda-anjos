import 'font-awesome/css/font-awesome.min.css';
import styles from './Social.module.scss'
import { phoneNumber } from 'types/database';

export default function Social() {
    return (
        <div className={styles.effect__aeneas}>
            <div className={styles.buttons}>
                <a href={`https://wa.me/${phoneNumber}?text=Olá, estou entrando em contato pelo site!`} className={styles.whatsapp} title="Whatsapp"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/personalizadoslindaanjos22" className={styles.insta} title="Nosso Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}