import purplelogo from '../../images/purplelogo.png'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo-text-space">
            <img src={purplelogo} alt="PurpleNote logo" />
            <h2 className="logo-text">PurpleNote</h2>
        </div>
        <div className="switch-forum-song">
            <button className="switch-song">Músicas</button>
            <h2>|</h2>
            <button className="switch-forum">Fórum</button>
        </div>
        <button className="lgn-btn">Entrar</button>
    </nav>
    </>
  )
}

export default Navbar;