import { ModalBackground, CloseButton } from "../../pages/Profile/ProfileStyled"
import { ModalContentSong } from "./SongModalStyled"
import { creatSongSchema } from "../../schemas/createSongSchema";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSong, getUserSongs } from "../../services/songServices";

const SongModal = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(creatSongSchema) });

  async function inHandleSubmit(data) {
    try {
      const match = data.spotifyLink.match(/track\/([^?]+)/);
      if (match && match[1]) {
        data.spotifyLink = match[1];
      } else {
        throw new Error("Link do Spotify inválido");
      }

      await createSong(data);
      await getUserSongs();
      props.closeModalSong();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ModalBackground>
      <ModalContentSong>
        <CloseButton onClick={props.closeModalSong}>&times;</CloseButton>
        <h2>Publicar uma nova Música</h2>
        <form onSubmit={handleSubmit(inHandleSubmit)}>
          <label>Nome:</label>
          <Input
            type="text"
            placeholder="Insira aqui o nome da sua música"
            name="name"
            register={register}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label>Link da imagem:</label>
          <Input
            type="text"
            placeholder="Insira aqui link da imagem da sua música"
            name="image"
            register={register}
          />
          {errors.image && <span>{errors.image.message}</span>}
          <label>Link spotify da música</label>
          <Input
            type="text"
            placeholder="Insira aqui o link do spotify"
            name="spotifyLink"
            register={register}
          />
          {errors.spotifyLink && <span>{errors.spotifyLink.message}</span>}
          <button type="submit">Salvar</button>
        </form>
      </ModalContentSong>
    </ModalBackground>
  )
}

export default SongModal