import { 
    CardPost, 
    RightPost,
    LeftPost,
    IconPost
} from "../../CardForum/CardForumStyled"
import { SideBarPost, CardProfilePostContainer } from "./CardProfileForumStyled"
import { TextLimit } from "../../../TextLimit/TextLimit"

const CardProfileForum = (props) => {
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
            <button className="DeleteButton">
                <i class="bi bi-trash"></i>
            </button>
        </SideBarPost>
    </CardProfilePostContainer>
  )
}

export default CardProfileForum