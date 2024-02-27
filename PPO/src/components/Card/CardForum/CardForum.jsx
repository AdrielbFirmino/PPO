import { 
    CardPost, 
    RightPost,
    LeftPost,
    IconPost
} from "./CardForumStyled"
import { TextLimit } from "../../TextLimit/TextLimit"

const CardForum = (props) => {
  return (
    <>
        <CardPost>
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
    </>
  )
}

export default CardForum