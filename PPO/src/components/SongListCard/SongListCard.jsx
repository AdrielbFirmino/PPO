import { SongContainer, LeftContainer, RightContainer } from "./SongListStyled";
import { TextLimit } from "../TextLimit/TextLimit"
import { useNavigate } from "react-router-dom";

const SongListCard = (props) => {

	const navigate = useNavigate();

	return (
		<>
			<SongContainer>
				<div className="side-container">
					<LeftContainer>
						<img src={props.image} />
					</LeftContainer>
					<section>
						<h1 onClick={() => navigate(`/song/${props.songId}`)}><TextLimit text={props.name} limit={35} /></h1>
						<div className="author-row">
							<img src={props.authorAvatar} />
							<p>{props.authorName}</p>
						</div>
					</section>
				</div>
				<RightContainer>
					{props.isHappySong ? (
						<div>
							<i className="bi bi-emoji-laughing"></i>
							<h4>{props.happyCount}</h4>
						</div>
					) : props.isSadSong ? (
						<div>
							<i className="bi bi-emoji-frown"></i>
							<h4>{props.sadCount}</h4>
						</div>
					) : props.isLoveSong ? (
						<div>
							<i className="bi bi-emoji-heart-eyes"></i>
							<h4>{props.loveCount}</h4>
						</div>
					) : props.isRelaxSong ? (
						<div>
							<i className="bi bi-emoji-sunglasses"></i>
							<h4>{props.relaxCount}</h4>
						</div>
					) : (
						<></>
					)}
					<div>
						<i className="bi bi-hand-thumbs-up"></i>
						<h4>{props.likesCount}</h4>
					</div>
				</RightContainer>
			</SongContainer>
		</>
	)
}

export default SongListCard