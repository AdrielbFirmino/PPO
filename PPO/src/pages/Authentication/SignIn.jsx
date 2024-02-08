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
import { Input } from "../../components/Input/Input";
import { GlobalStyled } from "../../GlobalStyled"
import purplelogo from '../../images/purplelogo.png'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { signinSchema } from "../../schemas/signinSchema";
import { signin } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(signinSchema) });

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      Cookies.set("token", response.data.token, { expires: 1 })
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <GlobalStyled isAuthPage={true} />
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
          <form onSubmit={handleSubmit(inHandleSubmit)}>
            <FormDiv issigninpage={true}>
              <label>Email</label>
              <Input
                type="email"
                placeholder=" Insira aqui seu email..."
                name="email"
                register={register} />
              {errors.email && <span>{errors.email.message}</span>}
              <label>Senha</label>
              <Input
                type="password"
                placeholder=" Insira aqui sua senha..."
                name="password"
                register={register} />
              {errors.password && <span>{errors.password.message}</span>}
            </FormDiv>
            <button type="submit">Entrar</button>
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