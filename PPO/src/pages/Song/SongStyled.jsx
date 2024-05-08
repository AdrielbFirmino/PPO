import styled from "styled-components";

export const CardMain = styled.div`
    display: flex;
    background-image: ${(props) => `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.songImage})`};
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
        color: white;
    }

    i {
        font-size: 4rem;
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

    .left-cont {
        display: flex;
        flex-direction: row;
        align-items: center;

        i{
            margin: 1rem;
            display: flex;
            align-items: center;
            color: white;
        }
    }

    .right-cont {
        display: flex;
        flex-direction: row;
    }
`
export const FeelingContainer = styled.div`
    color: ${(props) => (props.isLiked ? "rgb(122, 5, 212)" 
        : props.isHappy ? "rgb(122, 5, 212)" 
        : props.isSad ? "rgb(122, 5, 212)" 
        : props.isLove ? "rgb(122, 5, 212)"
        : props.isRelax ? "rgb(122, 5, 212)"
        : "white" )};
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