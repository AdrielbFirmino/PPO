import styled from "styled-components";

export const CardMain = styled.div`
    display: flex;
    background-image: ${(props) => `linear-gradient(to bottom, transparent 0%, #101010), url(${props.songImage})`};
    background-size: cover;
    background-position: center;
    border: 2px solid rgb(110, 50, 236);
    margin: 1vw;
    flex-direction: column;
    height: 100%;
    border-radius: 8px;
    border-bottom: none;
    margin-top: 3vh;
    filter: brightness(0.8);

    h1 {
        padding: 2rem;
        color: white;
    }

    i {
        font-size: 4rem;
        color: white;
        cursor: pointer;
    }
    
    p {
        color: white;
        font-size: 4rem;
    }
`
export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .right-cont {
        display: flex;
        flex-direction: row;
    }
`
export const FeelingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`
export const CenterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
        margin: 2rem;
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }
    
    .author-cont {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`