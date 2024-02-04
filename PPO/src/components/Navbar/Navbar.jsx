import purplelogo from '../../images/purplelogo.png'
/*import "./Navbar.css";*/
import {
  ButtonLogin,
  ButtonSwitchTop,
  ImageLogo,
  LogoText,
  LogoTextSpace,
  Nav,
  SwitchForumSong,
  LineD
} from './NavbarStyled';

const Navbar = () => {
  return (
    <>
      <Nav>
        <LogoText>
          <ImageLogo src={purplelogo} alt="PurpleNote logo" />
          <LogoTextSpace><h2>PurpleNote</h2></LogoTextSpace>
        </LogoText>
        <SwitchForumSong>
          <ButtonSwitchTop>Músicas</ButtonSwitchTop>
          <LineD> | </LineD>
          <ButtonSwitchTop>Fórum</ButtonSwitchTop>
        </SwitchForumSong>
        <ButtonLogin>Entrar</ButtonLogin>
      </Nav>
    </>
  )
}

export default Navbar;