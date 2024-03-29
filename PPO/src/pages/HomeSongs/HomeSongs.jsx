import { getAllSongs } from "../../services/songServices"
import CardSong from "../../components/Card/CardSong/CardSong"
import { CardMain, ContainerSongs, ArrowContainer, PaginationContainer, PaginationBox, ContainerRowSongs } from "./HomeSongsStyled"
import { useState, useEffect } from "react"

const HomeSongs = () => {

  const [song, setSong] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  async function findAllSongs() {
    try {
      const response = await getAllSongs(5, (currentPage - 1) * 5);
      const { total, results, nextUrl, previousUrl } = response.data;
      setSong(results);
      setTotalPages(Math.ceil(total / 5));
      setHasNextPage(!!nextUrl);
      setHasPreviousPage(!!previousUrl);
    } catch (error) {
      console.error("Erro ao tentar encontrar todas as Músicas: ", error);
    }
  }

  useEffect(() => {
    findAllSongs();
  }, [currentPage]);

  return (
    <CardMain>
      <h1>Músicas Novas</h1>
      <ContainerRowSongs>
        <ArrowContainer>
          {currentPage === 1
            ? ""
            : <i className="bi bi-arrow-bar-left" onClick={handlePreviousPage} disabled={!hasPreviousPage || currentPage === 1}></i>}
        </ArrowContainer>
        <ContainerSongs>
          {song.map((item) => (
            <CardSong key={item.id}
              image={item.image}
              name={item.name}
              authorName={item.authorName}
            />
          ))}
        </ContainerSongs>
        <ArrowContainer>
          {currentPage === totalPages
            ? ""
            : <i className="bi bi-arrow-bar-right" onClick={handleNextPage} disabled={!hasNextPage || currentPage === totalPages}></i>}
        </ArrowContainer>
      </ContainerRowSongs>
      <PaginationContainer>
        {Array.from(Array(totalPages).keys()).map((page) => (
          <PaginationBox
            key={page + 1}
            isActive={currentPage === page + 1}
          >
          </PaginationBox>
        ))}
      </PaginationContainer>
    </CardMain>
  )
}

export default HomeSongs