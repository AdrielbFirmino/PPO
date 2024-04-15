import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useState, useEffect } from "react";
import { getAllSongs, getUserSongs } from "../../services/songServices";
import { editUser } from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
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
  NewPostFormContainer,
  ModalBackground,
  ModalContent,
  CloseButton,
  ContainerPostProfileShowDiv
} from "../Profile/ProfileStyled";
import { creatPostSchema } from "../../schemas/createPostSchema";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import SongModal from "../../components/SongModal/SongModal";


const ProfileSong = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(creatPostSchema) });

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [songs, setSongs] = useState([])
  const [menuOpen, setMenuOpen] = useState(false);
  const [newSongOpen, setNewSongOpen] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [editedAvatar, setEditedAvatar] = useState(user.avatar);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const toggleNewPost = () => {
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

  async function inHandleSubmit(data) {
    try {
      await createUserSongs(data);
      await findAllUserSongs();
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findAllUserSongs();
  }, []);


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
        {/* Aqui começa o desafio */}
        <PostProfileShowDiv>
          <h1>{songs.length
                ? `${songs.length} ${
                    songs.length > 1 ? "  Músicas" : "  Música"
                }`
                : "Você não publicou nenhuma música até agora..."}</h1>
        </PostProfileShowDiv>
      </ContainerPostProfileShowDiv>
      <div>
        <NewPostContainer onClick={toggleNewPost}>
          <i className="bi bi-file-earmark-plus"></i>
          <h2>Publicar uma nova música...</h2>
        </NewPostContainer>
        {newSongOpen && (
          <SongModal 
          closeModalSong={closeModalSong} 
          openModalSong={openModalSong}
          findAllUserSongs={findAllUserSongs}/>
        )}
      </div>
    </CardMain> 
  );
}

export default ProfileSong;