import { useParams } from "react-router-dom"
import { searchPosts } from "../../services/postServices";
import { useState, useEffect } from "react";
import { TextResult } from "./SearchStyled";
import { 
  CardMain, 
  SearchPost, 
  ValidationErrorMessage, 
  TitleForumPage,
} from "../../components/Card/CardForum/CardForumStyled";
import CardForum from "../../components/Card/CardForum/CardForum";
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { searchSchema } from "../../schemas/searchSchema";


const Search = () => {
  const { title } = useParams();
  const [post, setPost] = useState([]);

  async function search() {
    try {
      const postApi = await searchPosts(title);
      setPost(postApi.data.results);
    } catch (err) {
      console.log(err);
      setPost([]);
    }
  }

  useEffect(() => {
    search()
  }, [title])


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


  return (
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
        <TitleForumPage>resultados de {title}</TitleForumPage>
        <TextResult>
          <span>
            {post.length
              ? `Encontramos ${post.length} ${
                  post.length > 1 ? "posts relacionados a pesquisa" : "post relacionado a pesquisa"
              }`
              : "Não encontramos resultados para esta pesquisa"}
          </span>
        </TextResult>
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
  )
}

export default Search