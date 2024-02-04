import purplelogo from '../../images/purplelogo.png'
/*import "./Navbar.css";*/
import {
  ButtonLogin,
  ButtonSwitchTop,
  ImageLogo,
  LogoText,
  LogoTextSpace,
  Nav,
  SwitchForumSong
} from './NavbarStyled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <LogoText>
          <ImageLogo src={purplelogo} alt="PurpleNote logo" />
          <LogoTextSpace>PurpleNote</LogoTextSpace>
        </LogoText>
        <SwitchForumSong>
          <ButtonSwitchTop>Músicas</ButtonSwitchTop>
          <h2>|</h2>
          <ButtonSwitchTop>Fórum</ButtonSwitchTop>
        </SwitchForumSong>
        <ButtonLogin>Entrar</ButtonLogin>
      </Nav>
    </>
  )
}

export default Navbar;