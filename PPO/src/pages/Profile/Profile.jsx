import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useState, useEffect } from "react";
import { createUserPosts, getUserPosts } from "../../services/postServices";
import { editUser } from "../../services/userService";
import CardProfileForum from "../../components/Card/CardProfile/CardProfileForum/CardProfileForum";
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
  CloseButton
} from "./ProfileStyled";
import { creatPostSchema } from "../../schemas/createPostSchema";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input/Input";


const Profile = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(creatPostSchema) });

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  const [menuOpen, setMenuOpen] = useState(false);
  const [newPostOpen, setNewPostOpen] = useState(false);
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
    setNewPostOpen(!newPostOpen)
  }

  async function findAllUserPosts() {
    const response = await getUserPosts();
    setPosts(response.data.results);
  }

  function signout() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/")
  }

  async function inHandleSubmit(data) {
    try {
      const response = await createUserPosts(data);
      await findAllUserPosts();
      return console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    findAllUserPosts();
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
        <button>
          Posts
        </button>
        <button>
          Músicas
        </button>
      </ButtonsPostSong>
      <MidLine></MidLine>
      <PostProfileShowDiv>
        <h1>{posts.length
              ? `${posts.length} ${
                  posts.length > 1 ? "  Posts" : "  Post"
              }`
              : "Você não fez nenhum Post até agora..."}</h1>
      </PostProfileShowDiv>
      <div>
        <NewPostContainer onClick={toggleNewPost}>
          <i className="bi bi-file-earmark-plus"></i>
          <h2>Fazer um novo post...</h2>
        </NewPostContainer>
        {newPostOpen && (
          <NewPostFormContainer>
            <form onSubmit={handleSubmit(inHandleSubmit)}>
              <label>Título do Post: </label>
              <Input
                type="text"
                placeholder="Insira o Titulo do post..."
                name="title"
                register = {register} />
              {errors.title && <span>{errors.title.message}</span>}
              <label>Conteúdo do post </label>
              <Input
                type="text"
                placeholder="Insira o conteúdo do post..."
                name="body" 
                register = {register} />
              {errors.body && <span>{errors.body.message}</span>}
              <button type="submit">Postar</button>
            </form>
          </NewPostFormContainer>
        )}
      </div>
      {posts.map((item) => (
        <CardProfileForum key={item.id}
            userAvatar={item.userAvatar}
            userName={item.userName}
            title={item.title}
            name={item.name}
            body={item.body}
            likes={item.likes}
            comments={item.comments}
            id={item.id}
            updatePosts={findAllUserPosts}
            />
        ))}
    </CardMain> 
  );
}

export default Profile