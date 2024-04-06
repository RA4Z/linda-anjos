import { Divider } from '@mui/material'
import styles from './Footer.module.scss'
import Logo from 'assets/logo.svg'

import facebook from 'assets/facebook.svg'
import instagram from 'assets/instagram.svg'
import linkedin from 'assets/linkedin.svg'

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <img src={Logo} alt='Logotipo' className={styles.container__logotipo} />
                </div>

                <div className={styles.container__dev}>

                    <button className={styles.container__button}>Default Webpage</button>
                    <Divider style={{ background: 'white' }} />
                    <div className={styles.container__icos}>
                        <a href='https://www.facebook.com'><img src={facebook} alt='Facebook' title='Nosso Facebook' className={styles.container__icos__icon} /></a>
                        <a href='https://www.instagram.com'><img src={instagram} alt='Instagram' title='Nosso Instagram' className={styles.container__icos__icon} /></a>
                        <a href='https://www.linkedin.com'><img src={linkedin} alt='LinkedIn' title='Nosso LinkedIn' className={styles.container__icos__icon} /></a>
                    </div>
                </div>

                <div className={styles.atribuicoes}>
                    <p style={{ color: '#64CCC5' }}>Infomações extra:</p>
                </div>
            </div>
            <div className={styles.creditos}><p>Default Webpage, projeto prototipado e desenvolvido por RV Tech rvtechny@gmail.com</p></div>
        </>
    )
}