import ProductCard from 'components/ProductCard';
import { useEffect, useState } from 'react'
import { CarrinhoType, ItensType } from 'types/sistema'
import styles from './Catalogo.module.scss'
import { itens } from './itens';
import Filtro from './Filtro';
import Ordenador, { OpcoesOrdenador } from './Ordenador';

export default function Catalogo() {
    const [items, setItems] = useState<CarrinhoType[]>([])
    const [filtro, setFiltro] = useState<string>('');
    const [busca, setBusca] = useState('');
    const [produtos, setProdutos] = useState<ItensType[]>(itens)
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');

    useEffect(() => {
        const info = localStorage.getItem('items');
        if (info) {
            const parsedInfo: CarrinhoType[] = JSON.parse(info);
            setItems(parsedInfo);
        }
    }, []);


    function ordenarPropriedade(lista: ItensType[], propriedade: 'title' | 'unityValue', ascending: boolean) {
        if (ascending) {
            return lista.sort((a, b) => a[propriedade] > b[propriedade] ? 1 : -1);
        } else {
            return lista.sort((a, b) => a[propriedade] < b[propriedade] ? 1 : -1);
        }
    }

    useEffect(() => {
        function testaFiltro(category: string) {
            if (filtro !== '') return filtro === category;
            return true;
        }
        function ordenar(novaLista: ItensType[]) {
            switch (ordenador) {
                case 'nomecrescente':
                    return ordenarPropriedade(novaLista, 'title', true);
                case 'nomedecrescente':
                    return ordenarPropriedade(novaLista, 'title', false);
                case 'precocrescente':
                    return ordenarPropriedade(novaLista, 'unityValue', true);
                case 'precodecrescente':
                    return ordenarPropriedade(novaLista, 'unityValue', false);
                default:
                    return novaLista;
            }
        }

        const novosProdutos = itens.filter(item => testaFiltro(item.category))
        setProdutos(novosProdutos)
        setProdutos(ordenar(novosProdutos))
    }, [filtro, ordenador])

    return (
        <div>
            <div className={styles.filterHeader}>
                <Filtro filtro={filtro} setFiltro={setFiltro} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>
            <div className={styles.container}>
                {produtos.map(produto => (
                    <ProductCard {...produto} itemsCarrinho={items} setItemsCarrinho={setItems} />
                ))}
            </div>
        </div>
    )
}