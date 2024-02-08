import { 
  RightSideDiv, 
  LeftSideDiv, 
  MainAuthDiv, 
  NoteStyled, 
  TitleDiv, 
  ImageLogo,
  FormDiv,
  SingUpText
} from "./AuthStyled"
import { GlobalStyled } from "../../GlobalStyled"
import purplelogo from '../../images/purplelogo.png'

const SignUp = () => {
  return (
    <>
    <GlobalStyled isAuthPage={true}/>
      <MainAuthDiv>
        <LeftSideDiv>
          <ImageLogo src={purplelogo} alt="PurpleNote logo" />
          <TitleDiv>
            <h1>Purple</h1><NoteStyled>Note</NoteStyled>
          </TitleDiv>
        </LeftSideDiv>
        <br />
        <RightSideDiv>
          <h1>Inscrever-se</h1>
          <p>Faça parte da nossa comunidade...</p>
          <form action="">
            <FormDiv isSignInPage={false}>
              <label>Email</label>
              <input type="text" placeholder="Insira aqui seu email..."/>
              <label>Nome de Usuário</label>
              <input type="text" placeholder="Insira seu Nome de usuário..."/>
              <label>Senha</label>
              <input type="password" placeholder="Insira aqui sua senha..."/>
              <label>Confirme a Senha</label>
              <input type="text" placeholder="Confirme a senha..."/>
            </FormDiv>
            <button>Entrar</button>
            <hr />
            <p>Não possui uma conta?</p>
            <SingUpText>Inscreva-se</SingUpText>
          </form>
        </RightSideDiv>
      </MainAuthDiv>
    </>
  )
}

export default SignUp