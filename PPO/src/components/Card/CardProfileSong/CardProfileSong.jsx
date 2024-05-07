import { CardPost } from "../CardForum/CardForumStyled";
import { SideBarPost } from "../CardProfile/CardProfileForum/CardProfileForumStyled";
import { CardProfileSongContainer, IconSong, LeftSong, ContainerSong } from "./CardProfileSongStyled";
import { deleteSong, editSong } from "../../../services/songServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { EditInput } from "../../Input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { creatSongSchema } from "../../../schemas/createSongSchema";

const CardProfileSong = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(creatSongSchema) });
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isEditing, setIsEditing] = useState(false);

  async function handleDeleteSong(songId) {
    try {
      await deleteSong(songId);
      props.updateSongs(); 
    } catch (error) {
      console.error("Erro ao deletar Música:", error);
    }
  }

  async function handleEditSong(data) {
    try {
      const match = data.spotifyLink.match(/track\/([^?]+)/);
      if (match && match[1]) {
        data.spotifyLink = match[1];
      } else {
        throw new Error("Link do Spotify inválido");
      }
      await editSong(props.id, data);
      setIsEditing(false);
      props.updateSongs();
      props.updateSongs();
    } catch (error) {
      console.error("Erro ao editar post:", error);
    }
  }

  return (
    <CardProfileSongContainer>
      {isEditing ? (
        <form className="edit-form" onSubmit={handleSubmit(handleEditSong)}>
          <label>Nome da música</label>
          <EditInput
            type="text"
            placeholder="Insira aqui o nome da sua música"
            name="name"
            defaultValue={props.name}
            register={register}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label>Link da imagem</label>
          <EditInput
            type="text"
            placeholder="Insira aqui link da imagem da sua música"
            name="image"
            defaultValue={props.image}
            register={register}
          />
          {errors.image && <span>{errors.image.message}</span>}
          <label>Link do spotify</label>
          <EditInput
            type="text"
            placeholder="Insira aqui o link do spotify"
            name="spotifyLink"
            defaultValue={props.spotifyLink}
            register={register}
          />
          {errors.spotifyLink && <span>{errors.spotifyLink.message}</span>}
          <button type="submit">Salvar</button>
          <button onClick={() => setIsEditing(false)}>Fechar</button>
        </form>
      ) : (
        <>
          <CardPost className="Card">
            <ContainerSong>
                <LeftSong >
                    <IconSong src={props.image} isMobile={isMobile} />
                </LeftSong>
                <section>
                    <h3 onClick={() => navigate(`/song/${props.id}`)}>{props.name}</h3>
                    <div className="author-container">
                        <img src={props.authorAvatar} />
                        <h6>{props.authorName}</h6>
                    </div>
                    <div>
                        <div className="feeling-card">
                            <i className="bi bi-emoji-laughing"></i>
                            <h6>{props.happyCount}</h6>
                        </div>
                        <div className="feeling-card">
                            <i className="bi bi-emoji-frown"></i>
                            <h6>{props.sadCount}</h6>
                        </div>
                        <div className="feeling-card">
                            <i className="bi bi-emoji-heart-eyes"></i>
                            <h6>{props.loveCount}</h6>
                        </div>
                        <div className="feeling-card">
                            <i className="bi bi-emoji-sunglasses"></i>
                            <h6>{props.relaxCount}</h6>
                        </div>
                    </div>
                </section>
            </ContainerSong>
          </CardPost>
          <SideBarPost>
              <button className="EditButton" onClick={() => setIsEditing(true)}>
                  <i className="bi bi-pencil-square"></i>
              </button>
              <button className="DeleteButton" onClick={() => handleDeleteSong(props.id)}>
                  <i className="bi bi-trash"></i>
              </button>
          </SideBarPost>
        </>
      )}
    </CardProfileSongContainer>
  );
}

export default CardProfileSong;