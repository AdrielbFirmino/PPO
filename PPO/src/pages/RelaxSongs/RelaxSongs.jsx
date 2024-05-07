import { useState, useEffect } from "react";
import { getAllSongs } from "../../services/songServices";
import { FullPageContainerForum } from "../Forum/HomeForumStyled";
import { CardMain, FeelingTitle } from "../../components/Card/CardForum/CardForumStyled";
import SongListCard from "../../components/SongListCard/SongListCard"
import { useNavigate } from "react-router-dom";

const RelaxSongs = () => {

	const [song, setSong] = useState([]);
	const [relaxSongs, setRelaxSongs] = useState([])
	const [isRelaxSong] = useState(true)

	const navigate = useNavigate();

	async function findAllRelaxSongs() {
		try {
			const response = await getAllSongs(100, 0);
			const { results } = response.data;
			setSong(results);
			const relaxSongs = [...results].sort((a, b) => b.relaxCount - a.relaxCount);
			setRelaxSongs(relaxSongs);
		} catch (error) {
			console.error("Erro ao tentar encontrar todas as Músicas: ", error);
		}
	}

	useEffect(() => {
		findAllRelaxSongs();
	}, []);

	return (
		<FullPageContainerForum>
			<CardMain>
				<FeelingTitle>Top 100 músicas mais emocionantes</FeelingTitle>
				{relaxSongs.map((item) => (
					<SongListCard key={item.id}
						authorAvatar={item.authorAvatar}
						authorName={item.authorName}
						name={item.name}
						image={item.image}
						likesCount={item.likesCount}
						relaxCount={item.relaxCount}
						songId={item.id}
						isRelaxSong={isRelaxSong} />
				))}
			</CardMain>
		</FullPageContainerForum>
	)
}

export default RelaxSongs