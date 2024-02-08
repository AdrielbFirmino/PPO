import purplelogo from '../../images/purplelogo.png'
import { Outlet, Link, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  function goAuth() {
    navigate("/signin")
  }

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
        <ButtonLogin onClick={goAuth}>Entrar</ButtonLogin>
      </Nav>
      <Outlet/>
    </>
  )
}

export default Navbar;