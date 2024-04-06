import { Outlet } from 'react-router-dom'
import styles from './DefaultPage.module.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'
export default function DefaultPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}