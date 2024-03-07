import { 
    CardPost,
    LeftPost,
    IconPost
} from "../CardForum/CardForumStyled"
import { CommentContainer } from "./CardCommentStyled";
import { TextLimit } from "../../TextLimit/TextLimit"
import { findUserById } from "../../../services/userService";
import { deleteComment } from "../../../services/postServices";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

const CardComment = (props) => {
  const userId = props.userId
  const [userComment, setUserComment] = useState({});
  const {user, setUser} = useContext(UserContext)

  async function handleDeleteComment(postId, idComment) {
    try {
        await deleteComment(postId, idComment);
        props.updatePost((prevPost) => ({
          ...prevPost,
          comments: prevPost.comments.filter(comment => comment.idComment !== idComment)
        }));
    } catch (error) {
        console.error("Erro ao deletar post:", error);
    }
  }

  useEffect(() => {
    async function fetchUserById() {
      try {
        if (userId) {
          const response = await findUserById(userId);
          setUserComment(response.data);
        }
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
                <IconPost src={userComment.avatar}/>
                <h4>{userComment.name}</h4>
            </LeftPost>
            <CommentContainer>
                <TextLimit text = {props.body} limit={100}/>
                <section>{userComment._id == user._id
                  ? <i className="bi bi-trash" onClick={() => handleDeleteComment(props.postId, props.idComment)}></i>
                  : "" }</section>
            </CommentContainer>
        </CardPost>
    </>
  )
}

export default CardComment;