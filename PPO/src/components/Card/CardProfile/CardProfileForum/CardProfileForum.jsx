import { 
    CardPost, 
    RightPost,
    LeftPost,
    IconPost
} from "../../CardForum/CardForumStyled"
import { SideBarPost, CardProfilePostContainer } from "./CardProfileForumStyled"
import { TextLimit } from "../../../TextLimit/TextLimit"
import { deletePost } from "../../../../services/postServices"

const CardProfileForum = (props) => {
  
  async function handleDeletePost(postId) {
    try {
        console.log(props.name, props.id)
        const response = await deletePost(postId);
        console.log("Post deletado com sucesso:", response.data);
    } catch (error) {
        console.error("Erro ao deletar post:", error);
    }
  }

  return (
    <CardProfilePostContainer>
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
            <button className="EditButton">
                <i className="bi bi-pencil-square"></i>
            </button>
            <button className="DeleteButton" onClick={() => handleDeletePost(props.id)}>
                <i className="bi bi-trash"></i>
            </button>
        </SideBarPost>
    </CardProfilePostContainer>
  )
}

export default CardProfileForum