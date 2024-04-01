import styled from "styled-components";

export const FullPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`

export const CardMain = styled.div`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    border: 2px solid rgb(110, 50, 236);
    flex-direction: column;
    margin-left: 2vw;
    width: 80%;
    height: 100%;
    border-radius: 8px;
    border-bottom: none;
    
    h1 {
        margin-top: 2vw;
        margin-left: 2vw;
        color: white;
    }
`

export const ContainerRowSongs = styled.div`
    display: flex;
`

export const ContainerSongs = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1vw;
    width: 100%;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-image: linear-gradient(rgb(78, 17, 125), transparent);
`

export const ArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    i {
        font-size: 4vh;
        color: white;
    }
`

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3vh;
    width: 50%;
    margin-left: 25%;
`

export const PaginationBox = styled.div`
    height: 50%;
    margin: 1vh;
    width: 2vh;
    border: 2px solid white;
    border-radius: 6px;
    background-color: ${({ isActive }) => isActive ? 'white' : 'transparent'};
    box-shadow: ${({ isActive }) => isActive ? 'white' : 'none'};
`

export const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 16%;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
`

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5%;
    padding-left: 5%;
    width: 80%;
    background-color: black;
    color: grey;
    border: 2px solid rgb(78, 17, 125);
    border-radius: 8px;
    
    input {
        background-color: black;
        color: grey;
        border: none;
        outline: none;
        width: 90%;
    }
    button{
        display: flex;
        background-color: black;
        justify-content: center;
        align-items: center;
        color: rgb(78, 17, 125);
        border: none;
        cursor: pointer;
    }
`

export const SongFeeling = styled.p`
    font-size: 4vh;
    padding: 5%;
    color: white;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
        color: rgb(122, 5, 212);
    }
`