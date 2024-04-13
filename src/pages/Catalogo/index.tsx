import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react'
import { CarrinhoType } from 'types/sistema'

export default function Catalogo() {
    const [items, setItems] = useState<CarrinhoType[]>([])
    const [produtos, setProdutos] = useState([{
        id: 4,
        title: 'Cadeira',
        unityValue: 250,
        information: 'Essa cadeira é feita de um material muito top, ela é usada para várias atividades cotidianas e blablabla',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/49/80/6f/49806f3f1c7483093855ebca1b8ae2c4.jpg'
    }])

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
            <h4>Itens no carrinho...</h4>
            {items.map(item => (
                <li>{item.title}</li>
            ))}
            {produtos.map(produto => (
                <ProductCard {...produto} itemsCarrinho={items} setItemsCarrinho={setItems} />
            ))}
        </div>
    )
}