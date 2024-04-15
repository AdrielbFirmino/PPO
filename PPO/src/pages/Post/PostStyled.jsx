import styled from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem;

    img {
        width: 10vh;
        height: 10vh;
        object-fit: cover;
        border-radius: 90px;
    }
`
export const TitleContainer = styled.div`
    margin-left: 1rem;
    display: flex;
    width: 100%;
    padding-top: 2vh;
    justify-content: space-between;
`
export const TituloPost = styled.h1`
    color: white;
    font-size: 5rem;
`
export const PostLikesContainer = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -2vh;
    margin-right: 3vh;
    font-size: 4vh;
    
    i {
        color: ${(props) => (props.isLiked ? "rgb(122, 5, 212)" : "white")};
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
            color: rgb(122, 5, 212);
        }
    }
`
export const BodyContainer = styled.div`
    display: flex;
    margin-left: 5%;
    width: 90%;
    height: 70vh;
    background-color: rgb(13, 13, 13);
    color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`
export const TextAreaComment = styled.textarea`
    color: grey;
    margin-bottom: 3vh;
    width: 80vw;
    justify-self: center;
`