import { useState, useEffect } from "react";
import { getAllSongs } from "../../services/songServices";
import { FullPageContainerForum } from "../Forum/HomeForumStyled";
import { CardMain, FeelingTitle } from "../../components/Card/CardForum/CardForumStyled";
import SongListCard from "../../components/SongListCard/SongListCard"
import { useNavigate } from "react-router-dom";

const HappySongs = () => {

	const [song, setSong] = useState([]);
	const [happySongs, setHappySongs] = useState([])
	const [isHappySong] = useState(true)

	const navigate = useNavigate();

	async function findAllHappySongs() {
		try {
			const response = await getAllSongs(100, 0);
			const { results } = response.data;
			setSong(results);
			const happierSongs = [...results].sort((a, b) => b.happyCount - a.happyCount);
			setHappySongs(happierSongs);
		} catch (error) {
			console.error("Erro ao tentar encontrar todas as Músicas: ", error);
		}
	}
	
	function goHome() {
		navigate("/home/songs")
	}

	useEffect(() => {
		findAllHappySongs();
	}, []);

	return (
		<FullPageContainerForum>
			<CardMain>
				<div className="top-cont">
					<i className="bi bi-arrow-left-short" onClick={goHome}></i>
					<FeelingTitle> Top 100 músicas mais Felizes</FeelingTitle>
				</div>
				{happySongs.map((item) => (
					<SongListCard key={item.id}
						authorAvatar={item.authorAvatar}
						authorName={item.authorName}
						name={item.name}
						image={item.image}
						likesCount={item.likesCount}
						happyCount={item.happyCount}
						songId={item.id}
						isHappySong={isHappySong} />
				))}
			</CardMain>
		</FullPageContainerForum>
	)
}

export default HappySongs