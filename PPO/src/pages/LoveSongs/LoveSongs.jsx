import { useState, useEffect } from "react";
import { getAllSongs } from "../../services/songServices";
import { FullPageContainerForum } from "../Forum/HomeForumStyled";
import { CardMain, FeelingTitle } from "../../components/Card/CardForum/CardForumStyled";
import SongListCard from "../../components/SongListCard/SongListCard"
import { useNavigate } from "react-router-dom";

const LoveSongs = () => {

	const [song, setSong] = useState([]);
	const [loveSongs, setLoveSongs] = useState([])
	const [isLoveSong] = useState(true)

	const navigate = useNavigate();

	async function findAllLoveSongs() {
		try {
			const response = await getAllSongs(100, 0);
			const { results } = response.data;
			setSong(results);
			const loveSongs = [...results].sort((a, b) => b.loveCount - a.loveCount);
			setLoveSongs(loveSongs);
		} catch (error) {
			console.error("Erro ao tentar encontrar todas as Músicas: ", error);
		}
	}

	useEffect(() => {
		findAllLoveSongs();
	}, []);

	return (
		<FullPageContainerForum>
			<CardMain>
				<FeelingTitle>Top 100 músicas mais Apaixonantes</FeelingTitle>
				{loveSongs.map((item) => (
					<SongListCard key={item.id}
						authorAvatar={item.authorAvatar}
						authorName={item.authorName}
						name={item.name}
						image={item.image}
						likesCount={item.likesCount}
						loveCount={item.loveCount}
						songId={item.id}
						isLoveSong={isLoveSong} />
				))}
			</CardMain>
		</FullPageContainerForum>
	)
}

export default LoveSongs