import CardForum from "../../components/Card/CardForum/CardForum";
import { getAllPosts } from "../../services/postServices";
import { CardMain, SearchPost, TitleForumPage, ValidationErrorMessage } from "../../components/Card/CardForum/CardForumStyled";
import { FormContainer } from "../Search/SearchStyled";
import { PaginationBoxContainer, PaginationBox } from "./HomeForumStyled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod"
import { searchSchema } from "../../schemas/searchSchema";

const HomeForum = () => {

  const [post, setPost] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState(null);

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
        <FormContainer>
          <form onSubmit={handleSubmit(onSearch)}>
            <SearchPost>
              <input {...register("title")} type="text" placeholder="Procure por um titulo de um Post..." />
              <button type="submit">
                <i className="bi bi-search"></i>
              </button>
            
            </SearchPost>
          </form>
        </FormContainer>
        <ValidationErrorMessage>
          {errors.title && <span>{errors.title.message}</span>}
        </ValidationErrorMessage>
        <TitleForumPage>Posts Recentes...</TitleForumPage>
        {post.map((item) => (
          <CardForum key={item.id}
            userAvatar={item.userAvatar}
            userName={item.userName}
            name={item.name}
            title={item.title}
            body={item.body}
            likes={item.likes}
            comments={item.comments}
            postId={item.id}
          />
        ))}
      </CardMain>
      <PaginationBoxContainer>
        <PaginationBox>
          <h1>1</h1>
        </PaginationBox>
      </PaginationBoxContainer>
    </>
  )
}

export default HomeForum