import { 
    CardPost, 
    RightPost,
    CenterPost,
    LeftPost,
    IconPost,
    TitlePost
} from "./CardForumStyled"

import icone from '../../../images/icone.jpg'

const CardForum = ({post}) => {
  return (
    <>
        <CardPost>
            <LeftPost>
                <IconPost src={icone} alt="" />
                <TitlePost>{post.title}</TitlePost>
            </LeftPost>
            <CenterPost>
                <h6>{post.text}</h6>
            </CenterPost>
            <RightPost>
                <i className="bi bi-hand-thumbs-up"></i>
                <h4>{post.likes}</h4>
                <i className="bi bi-chat-left-text"></i>
                <h4>{post.comments}</h4>
            </RightPost>
        </CardPost>
    </>
  )
}

export default CardForum