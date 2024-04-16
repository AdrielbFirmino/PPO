import { CardPost } from "../CardForum/CardForumStyled"
import { SideBarPost } from "../CardProfile/CardProfileForum/CardProfileForumStyled"
import { CardProfileSongContainer, IconSong, LeftSong, ContainerSong } from "./CardProfileSongStyled"
import { deleteSong, editSong } from "../../../services/songServices"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

const CardProfileSong = (props) => {

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(props.name);
  const [editedImage, setEditedImage] = useState(props.image);
	
  async function handleDeleteSong(songId) {
    try {
        await deleteSong(songId);
        props.updateSongs(); 
    } catch (error) {
        console.error("Erro ao deletar Música:", error);
    }
  }

  async function handleEditSong() {
    try {
      const newData = { name: editedName, image: editedImage };
      await editSong(props.id, newData);
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
        <form className="edit-form" onSubmit={handleEditSong}>
          <label>Titulo</label>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <label>Conteúdo</label>
          <textarea
            className="conteudo"
            type="text"
            value={editedImage}
            onChange={(e) => setEditedImage(e.target.value)}
          />
          <button type="submit">Salvar</button>
          <button onClick={() => !isEditing}>Fechar</button>
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
                            <i class="bi bi-emoji-frown"></i>
                            <h6>{props.sadCount}</h6>
                        </div>
                        <div className="feeling-card">
                            <i class="bi bi-emoji-heart-eyes"></i>
                            <h6>{props.loveCount}</h6>
                        </div>
                        <div className="feeling-card">
                            <i class="bi bi-emoji-sunglasses"></i>
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
  )
}

export default CardProfileSong