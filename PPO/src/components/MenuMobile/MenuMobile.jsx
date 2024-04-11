import { useState } from "react";
import { ContainerMenu, MenuOptions } from "./MenuMobileStyled"
import { useNavigate } from 'react-router-dom';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    function goAuth() {
        navigate("/signin")
    }
    function goProfile() {
        navigate("/profile")
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <ContainerMenu>
            {menuOpen ?
                <MenuOptions>
                    <h4 onClick={goProfile}>Perfil</h4>
                    <h4 onClick={goAuth}>Sair</h4>
                    <h4 onClick={toggleMenu}>Fechar</h4>
                </MenuOptions>
                :
                <i className="bi bi-list" onClick={toggleMenu}></i>
            }
        </ContainerMenu>
    )
}

export default MenuMobile