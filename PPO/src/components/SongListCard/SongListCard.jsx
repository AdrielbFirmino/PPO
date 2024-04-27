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
					<i className="bi bi-hand-thumbs-up"></i>
					<h4>{props.likesCount}</h4>
				</RightContainer>
			</SongContainer>
		</>
	)
}

export default SongListCard