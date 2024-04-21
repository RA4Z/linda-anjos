import { login } from 'services/auth';
import styles from './Login.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from 'config/supabase';
import Loading from 'components/Loading';
import { admMail } from 'types/database';

export default function Login() {
    const [logar, setLogar] = useState({ email: '', senha: '' })
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        async function getUserLogged() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user !== undefined) {
                if (user === admMail) {
                    navigate('/Admin')
                } else {
                    navigate('/')
                }
            }
        }
        getUserLogged()
    }, [navigate])

    async function userLogin() {
        setLoading(true)
        const result = await login(logar.email, logar.senha)
        setLoading(false)
        if (result === admMail) {
            navigate('/Admin')
        } else if (result === 'error') {
            alert('E-mail ou senha incorretos!')
        } else {
            navigate('/')
        }
    }

    return (
        <div className={styles.main_container}>
            <Loading open={loading} />
            <div className={styles.container} id="container">
                <div className={styles.sign_in_container}>
                    <div className={styles.formulario}>
                        <h1>Fazer Login</h1>

                        <input value={logar.email}
                            onChange={e => setLogar({ ...logar, email: e.target.value })}
                            type="email" placeholder="E-mail" />

                        <input value={logar.senha}
                            onChange={e => setLogar({ ...logar, senha: e.target.value })}
                            type="password" placeholder="Senha" />

                        <button onClick={() => userLogin()}>Fazer Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}