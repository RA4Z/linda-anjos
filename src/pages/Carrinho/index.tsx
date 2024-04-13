import { Divider } from '@mui/material'
import IMG1 from 'images/image1.jpg'
import IMG2 from 'images/image2.jpg'
import IMG3 from 'images/image3.jpg'
import Fechar from 'assets/fechar.svg'
import styles from './Carrinho.module.scss'
import SelectNumber from 'components/SelectNumber'
import { useState } from 'react'

export default function Carrinho() {
    const [items, setItems] = useState([
        {
            image: IMG1,
            title: 'Red Dead Redemption 2',
            quantity: 1,
            unityValue: 200,
            value: 200,
        },
        {
            image: IMG2,
            title: 'Devil May Cry',
            quantity: 6,
            unityValue: 59,
            value: 354,
        },
        {
            image: IMG3,
            title: 'Uncharted',
            quantity: 60,
            unityValue: 25,
            value: 1500,
        },
    ])
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.items__title}>
                    <h1>Shopping Cart</h1>
                    <h4>3 items</h4>
                </div>
                <Divider style={{ width: '100%' }} />
                <div className={styles.items__container}>{items.map((item, index) => (
                    <div key={index}>
                        <div className={styles.item}>
                            <img className={styles.item__produto} src={item.image} alt='Imagem' />
                            <li className={styles.item__title}>{item.title}</li>
                            <SelectNumber
                                items={item}
                                quantity={item.quantity}
                                setQuantity={(newObject: any) => {
                                    const updatedItems = [...items];
                                    updatedItems[index].quantity = newObject.quantity;
                                    updatedItems[index].value = Number(updatedItems[index].quantity) * Number(updatedItems[index].unityValue);
                                    setItems(updatedItems);
                                }}
                            />
                            <li style={{ width: '10%' }}>{item.value}R$</li>
                            <img className={styles.item__delete} src={Fechar} alt='Excluir do carrinho' />
                        </div>
                        <Divider style={{ width: '100%' }} />
                    </div>
                ))}

                </div>
            </div>
            <div className={styles.summary}>
                <div className={styles.summary__title}>
                    <h1>Summary</h1>
                </div>
                <Divider style={{ width: '100%' }} />

            </div>
        </div>
    )
}