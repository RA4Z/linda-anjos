import { supabase } from "config/supabase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Admin() {
    const navigate = useNavigate()
    useEffect(() => {
        async function getUserLogged() {
            const user = (await supabase.auth.getUser()).data.user?.email
            if (user === undefined) {
                navigate('/Login')
            }
        }
        getUserLogged()
    }, [navigate])

    return (
        <>
            <h1>Adm. Window</h1>
        </>
    )
}