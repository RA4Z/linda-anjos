import styles from './Login.module.scss';

export default function Login() {
    function addRightPanel() {
        document.getElementById('container')?.classList.add(styles.right_panel_active);
    }
    function removeRightPanel() {
        document.getElementById('container')?.classList.remove(styles.right_panel_active);
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.container} id="container">
                <div className={styles.sign_up_container}>
                    <form action="#">
                        <h1>Criação de Conta</h1>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <button>Fazer Cadastro</button>
                    </form>
                </div>
                <div className={styles.sign_in_container}>
                    <form action="#">
                        <h1>Fazer Login</h1>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <a href="/">Esqueceu sua senha?</a>
                        <button>Fazer Login</button>
                    </form>
                </div>
                <div className={styles.overlay_container}>
                    <div className={styles.overlay}>
                        <div className={styles.overlay_left}>
                            <h1>Bem-vindo de volta!</h1>
                            <p>Para se manter conectado conosco por favor faça o Login com suas informações pessoais</p>
                            <button className={styles.ghost} onClick={() => removeRightPanel()}>Fazer Login</button>
                        </div>
                        <div className={styles.overlay_right}>
                            <h1>Olá, amigo!</h1>
                            <p>Entre com seus detalhes pessoais e comece sua jornada conosco!</p>
                            <button className={styles.ghost} onClick={() => addRightPanel()}>Cadastre-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}