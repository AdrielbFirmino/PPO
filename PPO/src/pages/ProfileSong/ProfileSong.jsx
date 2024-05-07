import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useState, useEffect } from "react";
import { getUserSongs } from "../../services/songServices";
import { editUser } from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import CardProfileSong from "../../components/Card/CardProfileSong/CardProfileSong";
import { CardMain, 
  TopProfileDiv, 
  TopProfileMidDiv, 
  MenuProfileIcon, 
  TopProfileLeftDiv, 
  MidLine,
  ButtonsPostSong,
  PostProfileShowDiv,
  MenuDotIcon,
  NewPostContainer,
  ModalBackground,
  ModalContent,
  CloseButton,
  ContainerPostProfileShowDiv
} from "../Profile/ProfileStyled";
import SongModal from "../../components/SongModal/SongModal";


const ProfileSong = () => {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [songs, setSongs] = useState([])
  const [menuOpen, setMenuOpen] = useState(false);
  const [newSongOpen, setNewSongOpen] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [editedAvatar, setEditedAvatar] = useState(user.avatar);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editSongMode, setEditSongMode] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalSong = () => {
    setNewSongOpen(true);
  }

  const closeModalSong = () => {
    setNewSongOpen(false);
  }

  const handleUserEditSubmit = async (event) => {
    event.preventDefault();
    try {
      await editUser(user._id, { name: editedName, username: editedUsername, avatar: editedAvatar });
      setUser({ ...user, name: editedName, username: editedUsername, avatar: editedAvatar });
      closeModal();
    } catch (error) {
      console.error('Erro ao editar perfil:', error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleNewSong = () => {
    setNewSongOpen(!newSongOpen)
  }

  async function findAllUserSongs() {
    const response = await getUserSongs();
    setSongs(response.data.results);
  }

  function signout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/")
  }

  function goProfilePosts() {
    navigate("/profile")
  }

  useEffect(() => {
    findAllUserSongs();
  }, [newSongOpen, editSongMode]);


  return (
    <CardMain>
      <TopProfileDiv>
        <TopProfileLeftDiv >
          <img src={user.avatar} alt="" />
          <TopProfileMidDiv>
            <h3>{user.username}</h3>
            <section>
              <h1>{user.name}</h1>
            </section>
          </TopProfileMidDiv>
        </TopProfileLeftDiv>
        <MenuProfileIcon>
          <i className="bi bi-three-dots" onClick={toggleMenu}></i>
          {menuOpen && (
            <MenuDotIcon>
              <h3 onClick={openModal}>Editar Perfil</h3>
              {isModalOpen && (
                <ModalBackground>
                  <ModalContent>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                    <h2>Editar Perfil</h2>
                    <form onSubmit={handleUserEditSubmit}>
                      <label>Nome:</label>
                      <input
                        type="text"
                        value = {editedName}
                        name="name"
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                      <label>Username:</label>
                      <input
                        type="text"
                        value={editedUsername}
                        onChange={(e) => setEditedUsername(e.target.value)}
                      />
                      <label>Avatar:</label>
                      <input
                        type="text"
                        value={editedAvatar}
                        onChange={(e) => setEditedAvatar(e.target.value)}
                      />
                      <button type="submit">Salvar</button>
                    </form>
                  </ModalContent>
                </ModalBackground>
              )}
              <h3 onClick={signout}>Sair</h3>
            </MenuDotIcon>
          )}
        </MenuProfileIcon>  
      </TopProfileDiv>
      <ButtonsPostSong>
        <button onClick={goProfilePosts}>
          Posts
        </button>
        <button>
          Músicas
        </button>
      </ButtonsPostSong>
      <MidLine></MidLine>
      <ContainerPostProfileShowDiv>
        <PostProfileShowDiv>
          <h1>{songs.length
                ? `${songs.length} ${
                    songs.length > 1 ? "  Músicas" : "  Música"
                }`
                : "Você não publicou nenhuma música até agora..."}</h1>
        </PostProfileShowDiv>
      </ContainerPostProfileShowDiv>
      <div>
        <NewPostContainer onClick={toggleNewSong}>
          <i className="bi bi-file-earmark-plus"></i>
          <h2>Publicar uma nova música...</h2>
        </NewPostContainer>
        {newSongOpen && (
          <SongModal 
          closeModalSong={closeModalSong} 
          openModalSong={openModalSong}
          findAllUserSongs={findAllUserSongs}
          setSongs={setSongs}
          songs={songs}/>
        )}
      </div>
      {songs.map((item) => (
        <CardProfileSong 
          key={item.id}
          name={item.name}
          image={item.image}
          authorName={item.authorName}
          authorAvatar={item.authorAvatar}
          happyCount={item.happyCount}
          sadCount={item.sadCount}
          loveCount={item.loveCount}
          relaxCount={item.relaxCount}
          spotifyLink={item.spotifyLink}
          id={item.id}
          updateSongs={findAllUserSongs}
        />
      ))}
    </CardMain> 
  );
}

export default ProfileSong;