import { 
    CardPost,
    LeftPost,
    IconPost
} from "../CardForum/CardForumStyled"
import { CommentContainer } from "./CardCommentStyled";
import { TextLimit } from "../../TextLimit/TextLimit"
import { findUserById } from "../../../services/userService";
import { useEffect, useState } from "react";

const CardComment = (props) => {
  const userId = props.userId
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUserById() {
      try {
        const response = await findUserById(userId);
        setUser(response.data);
      } catch (error) {
        console.error(`Erro ao buscar o usuário do comentário ${props.body}`, error);
      }
    }

    fetchUserById();
  }, [userId]);
  
  return (
    <>
        <CardPost>
            <LeftPost>
                <IconPost src={user.avatar}/>
                <h4>{user.name}</h4>
            </LeftPost>
            <CommentContainer>
                <TextLimit text = {props.body} limit={100}/>
            </CommentContainer>
        </CardPost>
    </>
  )
}

export default CardComment;