import styles from './Whatsapp.module.scss'
import WhatsappIMG from 'assets/whatsapp.svg'

interface Props {
  message: string
}

export default function Whatsapp({ message }: Props) {
  const mensagem = encodeURIComponent(message);

  const handleWhatsappButtonClick = () => {
    // Número de telefone ou link de convite do WhatsApp
    const numeroTelefone = '5547988292846'; // Substitua pelo número de telefone desejado

    // Criar o link do WhatsApp com a mensagem
    const linkWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;

    // Abrir o link no WhatsApp Web
    window.open(linkWhatsapp, '_blank');

    // Deletar itens no carrinho
    localStorage.setItem('items', JSON.stringify([]));
  };

  return (
    <div className={styles.button} onClick={handleWhatsappButtonClick}>
      <img src={WhatsappIMG} alt='Ícone do Whatsapp' />
      <span>Fazer pedido</span>
    </div>
  );
}
