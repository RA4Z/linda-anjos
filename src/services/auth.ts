import { supabase } from "config/supabase";

export async function login(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    if (error) return error
    return email
}

export async function logoff() {
    const { error } = await supabase.auth.signOut()
    if (error) return error
    return 'success'
}