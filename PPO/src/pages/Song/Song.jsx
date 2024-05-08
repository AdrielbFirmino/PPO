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
import { addHappySong, 
	getSongById, 
	likeSong, 
	removeHappySong, 
	removeLikeSong } from "../../services/songServices";
import { useNavigate } from "react-router-dom";

const Song = () => {

	const { id } = useParams();
	const [song, setSong] = useState({});
	const [liked, setLiked] = useState(false);
	const [isHappy, setIsHappy] = useState(false);
	const [isSad, setIsSad] = useState(false);
	const [isLove, setIsLove] = useState(false);
	const [isRelax, setIsRelax] = useState(false);

	const { user } = useContext(UserContext)
	const songLink = `https://open.spotify.com/embed/track/${song.spotifyLink}?utm_source=generator`

	const navigate = useNavigate();

	const handleLikeClick = async () => {
		try {
			if (liked) {
				await removeLikeSong(id);
				setSong((prevSong) => ({
					...prevSong,
					likes: prevSong.likes.filter((userId) => userId !== user._id),
					likesCount: prevSong.likesCount - 1
				}));
			} else {
				console.log(id)
				await likeSong({ songId: id });
				setSong((prevSong) => ({
					...prevSong,
					likes: [...prevSong.likes, user._id],
					likesCount: prevSong.likesCount + 1
				}));
			}
			setLiked(!liked);
		} catch (error) {
			console.error('Error:', error.message);
		}
	};
	
	const handleHappyClick = async () => {
		try {
			if (isHappy) {
				await removeHappySong(id);
				setSong((prevSong) => ({
					...prevSong,
					happyFeel: prevSong.happyFeel.filter((userId) => userId !== user._id),
					happyCount: prevSong.happyCount - 1
				}));
			} else {
				await addHappySong({ songId: id });
				setSong((prevSong) => ({
					...prevSong,
					happyFeel: [...prevSong.happyFeel, user._id],
					happyCount: prevSong.happyCount + 1
				}));
			}
			setIsHappy(!isHappy);
		} catch (error) {
			console.error('Error:', error.message);
		}
	};

	function goHome() {
		navigate("/home/songs")
	}

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
			<CardMain songImage={song.image}>
				<TopContainer>
					<div className="left-cont">
						<i className="bi bi-arrow-left-short" onClick={goHome}></i>
						<h1>{song.name}</h1>
					</div>
					<div className="right-cont">
						<FeelingContainer isHappy={isHappy} onClick={handleHappyClick}>
							<i className="bi bi-emoji-laughing"></i>
							<p>{song.happyCount ? song.happyCount : 0}</p>
						</FeelingContainer>
						<FeelingContainer isLiked={liked}>
							<i className="bi bi-emoji-frown"></i>
							<p>{song.sadCount ? song.sadCount : 0}</p>
						</FeelingContainer>
						<FeelingContainer isLiked={liked}>
							<i className="bi bi-emoji-heart-eyes"></i>
							<p>{song.loveCount ? song.loveCount : 0}</p>
						</FeelingContainer>
						<FeelingContainer isLiked={liked}>
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
					<FeelingContainer isLiked={liked} onClick={handleLikeClick}>
						<i className="bi bi-hand-thumbs-up"></i>
						<p>{song.likesCount}</p>
					</FeelingContainer>
				</BottomContainer>
			</CardMain>
		</div>
	)
}

export default Song