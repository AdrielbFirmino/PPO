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

const HomeSongs = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [song, setSong] = useState([])
  const [currentPage] = useState(1);

  async function findAllSongs() {
    try {
      const response = await getAllSongs(12, 0);
      const { results } = response.data;
      setSong(results);
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
          <p>Felizes</p>
          <p>Emocionantes</p>
          <p>Apaixonantes</p>
          <p>Relaxantes</p>
        </FeelingsContainer>
        <div className="top-container">
          <h1>Músicas recentes</h1>
          <input type="text" placeholder="Buscar Músicas" />
        </div>
        <Slider song={song} />
        <div className="bottom-container">
          <h1>Músicas mais curtidas</h1>
        </div>
        <Slider song={song} />
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