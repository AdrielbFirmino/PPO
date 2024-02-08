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

const SignIn = () => {
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
          <h1>Entrar</h1>
          <p>Conecte-se com a principal comunidade de Música do Brasil</p>
          <form action="">
            <FormDiv isSignInPage={true}>
              <label>Email</label>
              <input type="text" placeholder=" Insira aqui seu email..."/>
              <label>Senha</label>
              <input type="password" placeholder=" Insira aqui sua senha..."/>
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

export default SignIn