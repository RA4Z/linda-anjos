import styles from './Header.module.scss'
import Logotipo from 'assets/logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation();

    function navigateHome() {
        if (location.pathname !== '/') navigate('/')
    }
    return (
        <div className={styles.container}>
            <button onClick={() => navigateHome()} title='Navegar para a Homepage'>
                <img src={Logotipo} alt='Logo da Weg' />
            </button>
        </div>
    )
}