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
import MenuMobile from '../MenuMobile/MenuMobile';
import { userLogged } from '../../services/userService';
import { useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Cookies from 'js-cookie';
import { UserContext } from '../../Context/UserContext';

const Navbar = () => {

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  function goAuth() {
    navigate("/signin")
  }
  function goProfile() {
    navigate("/profile")
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  function signout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/")
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    } else {
      setUser(undefined);
    }
  }, [setUser])

  return (
    <>
      <Nav>
        <div>
          <LogoText>
            <Link to="/">
            <ImageLogo src={purplelogo} alt="PurpleNote logo" title='home'/>
            </Link>
            <LogoTextSpace><h2>PurpleNote</h2></LogoTextSpace>
          </LogoText>
        </div>
        <SwitchForumSong className='CenterSwitch'>
          <Link to="/home/songs"><ButtonSwitchTop>Músicas</ButtonSwitchTop></Link>
          <LineD> | </LineD>
          <Link to="/"><ButtonSwitchTop>Fórum</ButtonSwitchTop></Link>
        </SwitchForumSong>
        {user ? (
          isMobile ? (
            <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}></MenuMobile>
          ) : (
          <section>
            <p onClick={goProfile} title='perfil'>{user.name}</p>
            <img src={user.avatar} onClick={goProfile} title='perfil'/>
            <div>
            <i className="bi bi-box-arrow-right" onClick={signout} title='sair'></i>
            </div>
          </section>
          )
        ) : (
          <ButtonLogin onClick={goAuth}>Entrar</ButtonLogin>
        )}
      </Nav>
      <Outlet/>
    </>
  )
}

export default Navbar;