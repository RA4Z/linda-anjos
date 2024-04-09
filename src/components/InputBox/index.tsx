import './styles.css'
interface Props {
    texto: any,
    onChange: (_:any) => any,
    label:string
}
export default function InputBox(props: Props) {
    return (
        <div className='inputBox'>
            <input placeholder=''
                autoComplete='texto_pesquisa'
                value={props.texto}
                onChange={props.onChange} />
            <span>{props.label}</span>
        </div>
    )
}