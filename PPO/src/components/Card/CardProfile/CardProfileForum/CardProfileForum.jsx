import { 
    CardPost, 
    RightPost,
    LeftPost,
    IconPost
} from "../../CardForum/CardForumStyled"
import { SideBarPost, CardProfilePostContainer } from "./CardProfileForumStyled"
import { TextLimit } from "../../../TextLimit/TextLimit"
import { deletePost, editPost } from "../../../../services/postServices"
import { useState } from "react"

const CardProfileForum = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedBody, setEditedBody] = useState(props.body);
  
  async function handleDeletePost(postId) {
    try {
        await deletePost(postId);
        props.updatePosts(); 
    } catch (error) {
        console.error("Erro ao deletar post:", error);
    }
  }

  async function handleEditPost() {
    try {
      const newData = { title: editedTitle, body: editedBody };
      await editPost(props.id, newData);
      props.updatePosts();
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao editar post:", error);
    }
  }

  return (
    <CardProfilePostContainer>
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditPost}>
          <label>Titulo</label>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <label>Conteúdo</label>
          <textarea
            className="conteudo"
            type="text"
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          />
          <button type="submit">Salvar</button>
        </form>
      ) : (
        <>
          <CardPost className="Card">
            <LeftPost>
                <IconPost src={props.userAvatar} />
                <h4>{props.name}</h4>
            </LeftPost>
            <section>
                <h3><TextLimit text = {props.title} limit={35}/></h3>
            </section>
            <RightPost>
                <i className="bi bi-hand-thumbs-up"></i>
                <h4>{props.likes?.length}</h4>
                <i className="bi bi-chat-left-text"></i>
                <h4>{props.comments?.length}</h4>
            </RightPost>
          </CardPost>
          <SideBarPost>
              <button className="EditButton" onClick={() => setIsEditing(true)}>
                  <i className="bi bi-pencil-square"></i>
              </button>
              <button className="DeleteButton" onClick={() => handleDeletePost(props.id)}>
                  <i className="bi bi-trash"></i>
              </button>
          </SideBarPost>
        </>
      )}
    </CardProfilePostContainer>
  )
}

export default CardProfileForum