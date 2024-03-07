import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { creatCommentSchema } from "../../schemas/createCommentSchema";
import CardComment from "../../components/Card/CardComment/CardComment";
import { getPostById, addComment } from "../../services/postServices";
import { CardMain, MidLine, PostProfileShowDiv, NewPostFormContainer } from "../Profile/ProfileStyled";
import { TitleContainer, TituloPost, TopContainer, BodyContainer, PostLikesContainer, TextAreaComment } from "./PostStyled";

const Post = () => {
  const {id} = useParams();
  const [post, setPost] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(creatCommentSchema)});

  async function inHandleSubmit(postId, data) {
    try {
      console.log(postId, data)
      const response = await addComment(postId, data);
      const updatedPost = { ...post, comments: [...post.comments, response.data] };
      setPost(updatedPost);
      reset();
      window.location.reload();
    } catch (err) {
      console.log("Erro ao adicionar comentário: ", err)
    }
  }

  useEffect(() => {
    async function fetchPostById() {
      try {
        const response = await getPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    }

    fetchPostById();
  }, [id]);

  return (
    <>
      <CardMain>
        <TopContainer>
          <img src={post.userAvatar} />
          <TitleContainer>
            {post && <TituloPost>{post.title}</TituloPost>}
            <PostLikesContainer>
              <i className="bi bi-hand-thumbs-up"></i>
              <h4>{post.likes?.length}</h4>
            </PostLikesContainer>
          </TitleContainer>
        </TopContainer>
        <BodyContainer>
          {post.body}
        </BodyContainer>
        <MidLine></MidLine>
        <PostProfileShowDiv>
          <h1>{post.comments && post.comments.length
                ? `${post.comments.length} ${
                    post.comments.length > 1 ? "  Comentários" : "  Comentário"
                }`
                : "Este post não tem nenhum comentário..."}</h1>
        </PostProfileShowDiv>
        <NewPostFormContainer>
          <form onSubmit={handleSubmit((data) => inHandleSubmit(post.id, data))}>
            <TextAreaComment type="text"
              placeholder="Faça um novo comentário..."
              name="text"
              {...register("text")}
              ></TextAreaComment>
              {errors.text && <span>{errors.text.message}</span>}
            <button type="submit">Postar</button>
          </form>
        </NewPostFormContainer>
        {post.comments && post.comments.map((item) =>(
          <CardComment key={item.idComment}
            idComment={item.idComment}
            userId={item.userId}
            body={item.body}
            postId={id}
            updatePost={setPost}
          />
        ))}
      </CardMain>
    </>
  )
}

export default Post