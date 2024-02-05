import { 
    CardPost, 
    RightPost,
    BodyPost,
    LeftPost,
    IconPost,
    TitlePost
} from "./CardForumStyled"

import icone from '../../../images/icone.jpg'
import { TextLimit } from "../../TextLimit/TextLimit"

const CardForum = (props) => {
  return (
    <>
        <CardPost>
            <LeftPost>
                <IconPost src={icone} alt="" />
                <TitlePost>{props.userName}</TitlePost>
            </LeftPost>
            <div>
                <h3>{props.title}</h3>
                <BodyPost>
                    <TextLimit text= {props.body} limit={125}/>
                </BodyPost>
            </div>
            <RightPost>
                <i className="bi bi-hand-thumbs-up"></i>
                <h4>{props.likes}</h4>
                <i className="bi bi-chat-left-text"></i>
                <h4>{props.comments}</h4>
            </RightPost>
        </CardPost>
    </>
  )
}

export default CardForum