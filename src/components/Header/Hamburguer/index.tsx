import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './styles.css'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';

export default function Hamburguer() {
    const navigate = useNavigate()
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <>
                    <input
                        id='menuHamburguer'
                        type="checkbox"
                        defaultChecked={false}
                        role="button"
                        aria-label="Display the menu"
                        className='menu'
                        {...bindTrigger(popupState)} // Usando bindTrigger para outras propriedades
                    />

                    <Menu {...bindMenu(popupState)} onClick={() => { popupState.close(); const menuHamburguer = document.getElementById('menuHamburguer') as HTMLInputElement; menuHamburguer.checked = false }}>
                        <MenuItem onClick={() => { popupState.close(); navigate('/'); const menuHamburguer = document.getElementById('menuHamburguer') as HTMLInputElement; menuHamburguer.checked = false }}>Home</MenuItem>
                        <MenuItem onClick={() => { popupState.close(); navigate('/Catalogo'); const menuHamburguer = document.getElementById('menuHamburguer') as HTMLInputElement; menuHamburguer.checked = false }}>Catálogo</MenuItem>
                        <MenuItem onClick={() => { popupState.close(); navigate('/Carrinho'); const menuHamburguer = document.getElementById('menuHamburguer') as HTMLInputElement; menuHamburguer.checked = false }}>Carrinho</MenuItem>
                        <MenuItem onClick={() => { popupState.close(); navigate('/Contato'); const menuHamburguer = document.getElementById('menuHamburguer') as HTMLInputElement; menuHamburguer.checked = false }}>Contato</MenuItem>
                        <MenuItem onClick={() => { popupState.close(); navigate('/Sobre'); const menuHamburguer = document.getElementById('menuHamburguer') as HTMLInputElement; menuHamburguer.checked = false }}>Sobre nós</MenuItem>
                    </Menu>
                </>
            )}
        </PopupState>
    );
}