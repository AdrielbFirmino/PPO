import { getAllSongs } from "../../services/songServices"
import Slider from "../../components/Slider/Slider"
import {
  FullPageContainer,
  MainContainer,
  FeelingsContainer
} from "./HomeSongsStyled"
import { useState, useEffect } from "react"
import { useMediaQuery } from 'react-responsive'
import { LeftSideDiv, ImageLogo, TitleDiv, NoteStyled } from "../Authentication/AuthStyled"
import purplelogo from '../../images/purplelogo.png'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ValidationErrorMessage } from "../../components/Card/CardForum/CardForumStyled"
import { searchSchema } from "../../schemas/searchSchema"
import { useNavigate } from "react-router-dom"

const HomeSongs = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [song, setSong] = useState([])
  const [likedSong, setLikedSong] = useState([])
  const [currentPage] = useState(1);

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

  function goHappy() {
    navigate("/home/songs/happy")
  }

  function goSad() {
    navigate("/home/songs/sad")
  }
  
  function goLove() {
    navigate("/home/songs/love")
  }

  function goRelax() {
    navigate("/home/songs/relax")
  }

  async function findAllSongs() {
    try {
      const response = await getAllSongs(12, 0);
      const { results } = response.data;
      setSong(results);
      const likeSongs = [...results].sort((a, b) => b.likesCount - a.likesCount);
      setLikedSong(likeSongs);
    } catch (error) {
      console.error("Erro ao tentar encontrar todas as Músicas: ", error);
    }
  }

  useEffect(() => {
    findAllSongs();
  }, [currentPage]);

  return (
    <FullPageContainer>
      <MainContainer>
        <FeelingsContainer>
          <p onClick={goHappy}>Felizes</p>
          <p onClick={goSad}>Emocionantes</p>
          <p onClick={goLove}>Apaixonantes</p>
          <p onClick={goRelax}>Relaxantes</p>
        </FeelingsContainer>
        <div className="top-container">
          <h1>Músicas recentes</h1>
          <div>
            <form onSubmit={handleSubmit(onSearch)}>
              <input {...register("title")} type="text" placeholder="Buscar Músicas" />
            </form>
            <ValidationErrorMessage>
            {errors.title && <span>{errors.title.message}</span>}
            </ValidationErrorMessage>
          </div>
        </div>
        <Slider song={song} />
        <div className="bottom-container">
          <h1>Músicas mais curtidas</h1>
        </div>
        <Slider song={likedSong} />
        {
          isMobile ?
            <LeftSideDiv isMobile={isMobile}>
              <ImageLogo src={purplelogo} alt="PurpleNote logo" />
              <TitleDiv>
                <h1>Purple</h1><NoteStyled>Note</NoteStyled>
              </TitleDiv>
            </LeftSideDiv>
          :
            "" 
        }
      </MainContainer>
    </FullPageContainer>
  )
}

export default HomeSongs