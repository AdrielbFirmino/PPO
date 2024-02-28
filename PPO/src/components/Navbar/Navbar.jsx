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
import { userLogged } from '../../services/userService';
import { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { UserContext } from '../../Context/UserContext';

const Navbar = () => {

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserContext)

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
        <LogoText>
          <Link to="/">
          <ImageLogo src={purplelogo} alt="PurpleNote logo" />
          </Link>
          <LogoTextSpace><h2>PurpleNote</h2></LogoTextSpace>
        </LogoText>
        <SwitchForumSong>
          <ButtonSwitchTop>Músicas</ButtonSwitchTop>
          <LineD> | </LineD>
          <Link to="/"><ButtonSwitchTop>Fórum</ButtonSwitchTop></Link>
        </SwitchForumSong>
        {user ? (
          <section>
            <p>{user.name}</p>
            <img src={user.avatar} onClick={goProfile}/>
            <i className="bi bi-box-arrow-right" onClick={signout}></i>
          </section>
        ) : (
          <ButtonLogin onClick={goAuth}>Entrar</ButtonLogin>
        )}
      </Nav>
      <Outlet/>
    </>
  )
}

export default Navbar;