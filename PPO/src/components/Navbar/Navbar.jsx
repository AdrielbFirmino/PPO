import purplelogo from '../../images/purplelogo.png'
import { Outlet, Link } from 'react-router-dom';
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
          <Link to="/">
          <ImageLogo src={purplelogo} alt="PurpleNote logo" />
          </Link>
          <LogoTextSpace><h2>PurpleNote</h2></LogoTextSpace>
        </LogoText>
        <SwitchForumSong>
          <ButtonSwitchTop>Músicas</ButtonSwitchTop>
          <LineD> | </LineD>
          <ButtonSwitchTop>Fórum</ButtonSwitchTop>
        </SwitchForumSong>
        <ButtonLogin>Entrar</ButtonLogin>
      </Nav>
      <Outlet/>
    </>
  )
}

export default Navbar;