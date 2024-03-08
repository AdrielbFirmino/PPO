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
  const [totalPages, setTotalPages] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

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

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  async function findAllPosts() {
    try {
      const response = await getAllPosts(5, (currentPage - 1) * 5);
      const { total, results, nextUrl, previousUrl } = response.data;
      setPost(results);
      setTotalPages(Math.ceil(total / 5));
      setHasNextPage(!!nextUrl);
      setHasPreviousPage(!!previousUrl);
    } catch (error) {
      console.error("Erro ao tentar encontrar todos os posts: ", error);
    }
  }

  useEffect(() => {
    findAllPosts();
  }, [currentPage]);

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
        <PaginationBox onClick={handlePreviousPage} disabled={!hasPreviousPage}>
            {"<"}
        </PaginationBox>
        {Array.from(Array(totalPages).keys()).map((page) => (
            <PaginationBox
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                  isActive={currentPage === page + 1}
            >
                <h1>{page + 1}</h1>
            </PaginationBox>
        ))}
        <PaginationBox onClick={handleNextPage} disabled={!hasNextPage}>
            {">"}
        </PaginationBox>
      </PaginationBoxContainer>
    </>
  )
}

export default HomeForum