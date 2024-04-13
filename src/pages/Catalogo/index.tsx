import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react'
import { CarrinhoType } from 'types/sistema'
import styles from './Catalogo.module.scss'
import IMG1 from 'images/image1.jpg'
import IMG2 from 'images/image2.jpg'
import IMG3 from 'images/image3.jpg'

export default function Catalogo() {
    const [items, setItems] = useState<CarrinhoType[]>([])
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            image: IMG1,
            title: 'Red Dead Redemption 2',
            information: 'Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto desenvolvido pela Rockstar Games. O jogo se passa em 1899, no final da era do Velho Oeste, e segue a história do fora-da-lei Arthur Morgan, membro da gangue Van der Linde.',
            unityValue: 200,
        },
        {
            id: 2,
            image: IMG2,
            title: 'Devil May Cry',
            information: 'A história decorre nos tempos modernos, na ilha fictícia de Mallet, e centra-se em Dante, um caçador de demónios que usa o seu negócio para obter vingança depois de perder a sua mãe e o seu irmão. Acaba por conhecer uma mulher de nome Trish que o leva numa aventura para derrotar Mundus, o Lorde Demónio.',
            unityValue: 59,
        },
        {
            id: 3,
            title: 'Uncharted',
            unityValue: 25,
            information: 'Criada pela premiada desenvolvedora Naughty Dog, a série UNCHARTED é uma experiência cinematográfica de ação e aventura em que você pode revelar mistérios históricos enquanto viaja pelos mais variados e deslumbrantes ambientes renderizados.',
            image: IMG3,
        },
        {
            id: 4,
            title: 'Cadeira',
            unityValue: 250,
            information: 'Essa cadeira é feita de um material muito top, ela é usada para várias atividades cotidianas e blablabla',
            image: 'https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg'
        }
    ])

    useEffect(() => {
        const info = localStorage.getItem('items');
        if (info) {
            const parsedInfo: CarrinhoType[] = JSON.parse(info);
            setItems(parsedInfo);
        }
    }, []);

    return (
        <div>
            <h2>Tela do Catálogo</h2>
            <div className={styles.container}>
                {produtos.map(produto => (
                    <ProductCard {...produto} itemsCarrinho={items} setItemsCarrinho={setItems} />
                ))}
            </div>
        </div>
    )
}