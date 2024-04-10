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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../components/Input/Input";
import { signupSchema } from "../../schemas/signupSchema";
import { signup } from "../../services/userService";
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import Cookies from "js-cookie"


const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  async function inHandleSubmit(data) {
    try {
      const response = await signup(data);
      Cookies.set("token", response.data.token, { expires: 1 })
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  function goSignin() {
    navigate("/signin")
  }

  return (
    <>
      <GlobalStyled isAuthPage={true} />
      <MainAuthDiv isMobile={isMobile}>
        <LeftSideDiv>
          <ImageLogo src={purplelogo} alt="PurpleNote logo" />
          <TitleDiv>
            <h1>Purple</h1><NoteStyled>Note</NoteStyled>
          </TitleDiv>
        </LeftSideDiv>
        <br />
        <RightSideDiv isMobile={isMobile}>
          <h1>Inscrever-se</h1>
          <p>Faça parte da nossa comunidade...</p>
          <form onSubmit={handleSubmit(inHandleSubmit)}>
            <FormDiv issigninpage={false} isMobile={isMobile}>
              <label>Email</label>
              <Input
                type="email"
                placeholder="Insira aqui seu email..."
                name="email"
                register={register} />
              {errors.email && <span>{errors.email.message}</span>}
              <label>Nome</label>
              <Input
                type="text"
                placeholder="Insira seu Nome"
                name="name"
                register={register} />
              {errors.name && <span>{errors.name.message}</span>}
              <label>Senha</label>
              <Input
                type="password"
                placeholder="Insira aqui sua senha..."
                name="password"
                register={register} />
              {errors.password && <span>{errors.password.message}</span>}
              <label>Confirme a Senha</label>
              <Input
                type="password"
                placeholder="Confirme sua senha..."
                name="confirmpassword"
                register={register} />
              {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
            </FormDiv>
            <button type="submit">Cadastrar</button>
            <hr />
            <p>Já possui uma conta?</p>
            <SingUpText onClick={goSignin}>Entrar</SingUpText>
          </form>
        </RightSideDiv>
      </MainAuthDiv>
    </>
  )
}

export default SignUp