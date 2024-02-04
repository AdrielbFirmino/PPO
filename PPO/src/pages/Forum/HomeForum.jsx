import Navbar from "../../components/Navbar/Navbar";
import CardForum from "../../components/Card/CardForum/CardForum";
import { CardMain, SearchPost, TitleForumPage  } from "../../components/Card/CardForum/CardForumStyled";
import { post } from "../../DataMock";


const HomeForum = () => {
  return (
    <>
    <Navbar />
    <CardMain>
      <SearchPost>
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Procure por um titulo de um Post..."/>
      </SearchPost>
      <TitleForumPage>Posts Recentes...</TitleForumPage>
      {post.map((item, index) => (
        <CardForum key={index} post={item}/>
      ))}
    </CardMain>
    </>
  )
}

export default HomeForum