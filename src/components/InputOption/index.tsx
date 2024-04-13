import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styles from './InputOption.module.scss'

interface Props {
    dados: any,
    setDados: any
}

export default function InputOption(props: Props) {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label" style={{ color: '#4ba3eb' }}>Recebimento</InputLabel>
            <Select
                id="demo-simple-select"
                value={props.dados}
                className={styles.status_projeto}
                onChange={e => props.setDados(e.target.value)}>
                <MenuItem value={'Entrega'} style={{ color: 'black', fontWeight: 'bold' }}>Entrega</MenuItem>
                <MenuItem value={'Retirada no Local'} style={{ color: 'black', fontWeight: 'bold' }}>Retirada no Local</MenuItem>
            </Select>
        </FormControl>
    )
}