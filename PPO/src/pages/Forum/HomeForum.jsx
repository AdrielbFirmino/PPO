import CardForum from "../../components/Card/CardForum/CardForum";
import { getAllPosts } from "../../services/postServices";
import { CardMain, SearchPost, TitleForumPage, ValidationErrorMessage } from "../../components/Card/CardForum/CardForumStyled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const searchSchema = z.object({
  title: z
    .string()
    .min(1, { message: "A pesquisa não pode ser vazia" })
    .refine(value => !/^\s*$/.test(value), {
      message: "A pesquisa não pode ser vazia"
    })
});

const HomeForum = () => {

  const [post, setPost] = useState([])

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: {errors} 
  } = useForm({
    resolver: zodResolver(searchSchema)
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset;
  }

  async function findAllPosts() {
    const response = await getAllPosts();
    setPost(response.data.results);
  }

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <>
      <CardMain>
        <form onSubmit={handleSubmit(onSearch)}>
          <SearchPost>
            <input {...register("title")} type="text" placeholder="Procure por um titulo de um Post..." />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </SearchPost>
        </form>
        <ValidationErrorMessage>
          {errors.title && <span>{errors.title.message}</span>}
        </ValidationErrorMessage>
        <TitleForumPage>Posts Recentes...</TitleForumPage>
        {post.map((item) => (
          <CardForum key={item.id}
            userAvatar={item.userAvatar}
            userName={item.userName}
            title={item.title}
            body={item.body}
            likes={item.likes}
            comments={item.likes}
          />
        ))}
      </CardMain>
    </>
  )
}

export default HomeForum