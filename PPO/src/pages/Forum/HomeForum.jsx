import Navbar from "../../components/Navbar/Navbar";
import CardForum from "../../components/Card/CardForum/CardForum";
import { getAllPosts } from "../../services/postServices";
import { CardMain, SearchPost, TitleForumPage  } from "../../components/Card/CardForum/CardForumStyled";
import { useEffect, useState } from "react";


const HomeForum = () => {

  const [post, setPost] = useState([])

  async function findAllPosts() {
    const response = await getAllPosts();
    setPost(response.data.results);
  }

  useEffect(() => {
    findAllPosts();
  }, []);

  return (
    <>
    <Navbar />
    <CardMain>
      <SearchPost>
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Procure por um titulo de um Post..."/>
      </SearchPost>
      <TitleForumPage>Posts Recentes...</TitleForumPage>
      {post.map((item) => (
        <CardForum key={item.id}
        userAvatar={item.userAvatar}
        userName={item.userName}
        title={item.title}
        body={item.body}
        likes={item.likes.length}
        comments={item.likes.length}
        />
      ))}
    </CardMain>
    </>
  )
}

export default HomeForum