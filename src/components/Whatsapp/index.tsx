export default function Whatsapp() {
  const mensagem = encodeURIComponent('Mensagem default que está inserida no software brabo desenvolvido pelo RV Tech');

  const handleWhatsappButtonClick = () => {
    // Número de telefone ou link de convite do WhatsApp
    const numeroTelefone = '5547988292846'; // Substitua pelo número de telefone desejado

    // Criar o link do WhatsApp com a mensagem
    const linkWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;

    // Abrir o link no WhatsApp Web
    window.open(linkWhatsapp, '_blank');
  };

  return (
    <button onClick={handleWhatsappButtonClick}>Enviar mensagem pelo WhatsApp</button>
  );
}
