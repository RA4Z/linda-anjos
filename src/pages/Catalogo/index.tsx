import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react'
import { CarrinhoType } from 'types/sistema'

export default function Catalogo() {
    const [items, setItems] = useState<CarrinhoType[]>([])

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
            <ProductCard />
        </div>
    )
}