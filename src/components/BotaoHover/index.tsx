import styles from './BotaoHover.module.scss'

interface Props {
    text: string
    onClick: any
}

export default function BotaoHover(props: Props) {
    return (
        <button className={styles.cta} onClick={() => props.onClick()}>
            <span>{props.text}</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
        </button>
    )
}