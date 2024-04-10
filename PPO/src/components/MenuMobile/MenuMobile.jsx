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
            <i className="bi bi-list" onClick={toggleMenu}></i>
            {menuOpen && (
                <MenuOptions>
                    <h4 onClick={goProfile}>Perfil</h4>
                    <h4 onClick={goAuth}>Sair</h4>
                </MenuOptions>
            )}
            

            {/*{menuOpen && (
                <MenuDotIcon>
                    <h3 onClick={openModal}>Editar Perfil</h3>
                    {isModalOpen && (
                        <ModalBackground>
                            <ModalContent>
                                <CloseButton onClick={closeModal}>&times;</CloseButton>
                                <h2>Editar Perfil</h2>
                                <form onSubmit={handleUserEditSubmit}>
                                    <label>Nome:</label>
                                    <input
                                        type="text"
                                        value={editedName}
                                        name="name"
                                        onChange={(e) => setEditedName(e.target.value)}
                                    />
                                    <label>Username:</label>
                                    <input
                                        type="text"
                                        value={editedUsername}
                                        onChange={(e) => setEditedUsername(e.target.value)}
                                    />
                                    <label>Avatar:</label>
                                    <input
                                        type="text"
                                        value={editedAvatar}
                                        onChange={(e) => setEditedAvatar(e.target.value)}
                                    />
                                    <button type="submit">Salvar</button>
                                </form>
                            </ModalContent>
                        </ModalBackground>
                    )}
                    <h3 onClick={signout}>Sair</h3>
                </MenuDotIcon>
            )}*/}
        </ContainerMenu>
    )
}

export default MenuMobile