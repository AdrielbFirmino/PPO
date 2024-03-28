import { MainContainer } from "./CardSongStyled"

const CardSong = (props) => {
  return (
    <MainContainer>
        <img src={props.image}/>
        <h4>{props.name}</h4>
        <h5>{props.authorName}</h5>
    </MainContainer>
  )
}

export default CardSong