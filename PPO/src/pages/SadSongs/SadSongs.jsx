import { useState, useEffect } from "react";
import { getAllSongs } from "../../services/songServices";
import { FullPageContainerForum } from "../Forum/HomeForumStyled";
import { CardMain, FeelingTitle } from "../../components/Card/CardForum/CardForumStyled";
import SongListCard from "../../components/SongListCard/SongListCard"
import { useNavigate } from "react-router-dom";

const SadSongs = () => {

	const [song, setSong] = useState([]);
	const [sadSongs, setSadSongs] = useState([])
	const [isSadSong] = useState(true)

	const navigate = useNavigate();

	async function findAllSadSongs() {
		try {
			const response = await getAllSongs(100, 0);
			const { results } = response.data;
			setSong(results);
			const sadSongs = [...results].sort((a, b) => b.sadCount - a.sadCount);
			setSadSongs(sadSongs);
		} catch (error) {
			console.error("Erro ao tentar encontrar todas as Músicas: ", error);
		}
	}

	useEffect(() => {
		findAllSadSongs();
	}, []);

	return (
		<FullPageContainerForum>
			<CardMain>
				<FeelingTitle>Top 100 músicas mais emocionantes</FeelingTitle>
				{sadSongs.map((item) => (
					<SongListCard key={item.id}
						authorAvatar={item.authorAvatar}
						authorName={item.authorName}
						name={item.name}
						image={item.image}
						likesCount={item.likesCount}
						sadCount={item.sadCount}
						songId={item.id}
						isSadSong={isSadSong} />
				))}
			</CardMain>
		</FullPageContainerForum>
	)
}

export default SadSongs