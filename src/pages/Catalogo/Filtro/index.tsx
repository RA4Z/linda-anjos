import styles from './Filtro.module.scss'
import filtros from './filtros.json';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
    filtro: string;
    setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

export default function Filtro({ filtro, setFiltro }: Props) {
    function selecionarFiltro(opcao: IOpcao) {
        if (filtro === opcao.label) return setFiltro('');
        return setFiltro(opcao.label);
    }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.label
                    })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}