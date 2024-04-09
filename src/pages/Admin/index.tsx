import { supabase } from "config/supabase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DatabaseType } from "types/database"
import { databaseEmpty } from "./fields"
import InputBox from "components/InputBox"

import styles from './Admin.module.scss'
import BotaoHover from "components/BotaoHover"
import { insertData } from "services/table"

export default function Admin() {
    const navigate = useNavigate()
    const [data, setData] = useState<DatabaseType>(databaseEmpty)

    useEffect(() => {
        async function getUserLogged() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user === undefined) {
                navigate('/Login')
            }
        }
        getUserLogged()
    }, [navigate])

    async function cadastrar() {
        const result = await insertData('Basic_Database', data)
        if (result === 'success') {
            alert('Cadastrado com sucesso!')
            setData(databaseEmpty)
        } else {
            alert(`Ocorreu o erro ${result}!`)
        }
    }

    return (
        <div className={styles.container}>
            <h1>Janela de Administração</h1>
            <div className={styles.form}>
                {Object.entries(data).map(([field, value]) => (
                    (field !== 'id' && field !== 'created_at') &&
                    <InputBox label={field.replaceAll('_', ' ').toLocaleUpperCase()}
                        texto={value} onChange={e => setData({ ...data, [field]: e.target.value })} />
                ))}
            </div>
            <BotaoHover text="Realizar Cadastro" onClick={() => cadastrar()} />
        </div>
    )
}