import { useParams } from "react-router-dom"
import { searchSongs } from "../../services/songServices";
import { useState, useEffect } from "react";
import { TextResult, FormContainer } from "./SearchStyled";
import { FullPageContainerForum } from "../Forum/HomeForumStyled";
import {
  CardMain,
  SearchPost,
  ValidationErrorMessage,
  TitleForumPage,
} from "../../components/Card/CardForum/CardForumStyled";
import { zodResolver } from "@hookform/resolvers/zod"
import SongListCard from "../../components/SongListCard/SongListCard"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { searchSchema } from "../../schemas/searchSchema";

const SearchSong = () => {
    const { title } = useParams();
    const [song, setSong] = useState([]);
  
    async function search() {
      try {
        const songApi = await searchSongs(title);
        setSong(songApi.data.results);
      } catch (err) {
        console.log(err);
        setSong([]);
      }
    }
  
    useEffect(() => {
      search()
    }, [title])
  
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm({
      resolver: zodResolver(searchSchema)
    });
    const navigate = useNavigate();
  
    function onSearch(data) {
      const { title } = data;
      navigate(`/search/song/${title}`);
      reset;
    }
  
  
    return (
      <FullPageContainerForum>
        <CardMain>
          <FormContainer>
            <form onSubmit={handleSubmit(onSearch)}>
              <SearchPost>
                <input {...register("title")} type="text" placeholder="Procure por uma música..." />
                <button type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </SearchPost>
            </form>
          </FormContainer>
          <ValidationErrorMessage>
            {errors.title && <span>{errors.title.message}</span>}
          </ValidationErrorMessage>
          <TitleForumPage>resultados de {title}</TitleForumPage>
          <TextResult>
            <span>
              {song.length
                ? `Encontramos ${song.length} ${song.length > 1 ? "posts relacionados a pesquisa" : "post relacionado a pesquisa"
                }`
                : "Não encontramos resultados para esta pesquisa"}
            </span>
          </TextResult>
          {song.map((item) => (
            <SongListCard key={item.id}
            authorAvatar={item.authorAvatar}
            authorName={item.authorName}
            name={item.name}
            image={item.image}
            likesCount={item.likesCount}
            songId={item.id}/>
          ))}
        </CardMain>
      </FullPageContainerForum>
    )
}

export default SearchSong