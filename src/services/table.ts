import { supabase } from "config/supabase";

export async function getData(database: string, setDados: any, setBackup: any) {
    let { data: dados, error } = await supabase
        .from(database)
        .select('*')
    if (error) {
        return error;
    }
    setDados(dados)
    setBackup(dados)
    return dados;
}