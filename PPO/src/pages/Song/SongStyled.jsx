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

    h1 {
        padding: 2rem;
        color: rgb(110, 50, 236);
    }

    i {
        font-size: 4rem;
        color: rgb(110, 50, 236);
        cursor: pointer;
    }
    
    p {
        color: rgb(110, 50, 236);
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
    height: 80vh;
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