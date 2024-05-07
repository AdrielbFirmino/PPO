import {
	CardMain,
	TopContainer,
	FeelingContainer,
	CenterContainer,
	BottomContainer
} from "./SongStyled"
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { getSongById } from "../../services/songServices";

const Song = () => {

	const { id } = useParams();
	const [song, setSong] = useState({});
	const [liked, setLiked] = useState(false);
	const { user } = useContext(UserContext)
	const songLink = `https://open.spotify.com/embed/track/${song.spotifyLink}?utm_source=generator`

	useEffect(() => {
		async function fetchSongById() {
			try {
				const response = await getSongById(id);
				setSong(response.data);
				setLiked(response.data.likes?.includes(user._id));
			} catch (error) {
				console.error("Erro ao buscar a música:", error);
			}
		}

		fetchSongById();
	}, [id]);

	return (
		<div>
			{console.log(songLink)}
			<CardMain songImage={song.image}>
				<TopContainer>
					<div>
						<h1>{song.name}</h1>
					</div>
					<div className="right-cont">
						<FeelingContainer>
							<i className="bi bi-emoji-laughing"></i>
							<p>{song.happyCount ? song.happyCount : 0}</p>
						</FeelingContainer>
						<FeelingContainer>
							<i className="bi bi-emoji-frown"></i>
							<p>{song.sadCount ? song.sadCount : 0}</p>
						</FeelingContainer>
						<FeelingContainer>
							<i className="bi bi-emoji-heart-eyes"></i>
							<p>{song.loveCount ? song.loveCount : 0}</p>
						</FeelingContainer>
						<FeelingContainer>
							<i className="bi bi-emoji-sunglasses"></i>
							<p>{song.relaxCount ? song.relaxCount : 0}</p>
						</FeelingContainer>
					</div>
				</TopContainer>
				<CenterContainer>
					<iframe style={{ borderRadius: '12px' }} src={songLink} width="90%" height="250rem" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</CenterContainer>
				<BottomContainer>
					<div className="author-cont">
						<img src={song.authorAvatar} />
						<p>{song.authorName}</p>
					</div>
					<FeelingContainer>
						<i className="bi bi-hand-thumbs-up"></i>
						<p>{song.likesCount}</p>
					</FeelingContainer>
				</BottomContainer>
			</CardMain>
		</div>
	)
}

export default Song