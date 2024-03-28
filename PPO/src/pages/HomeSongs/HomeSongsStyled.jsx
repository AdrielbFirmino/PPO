import styled from "styled-components";

export const CardMain = styled.div`
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    border: 2px solid rgb(110, 50, 236);
    flex-direction: column;
    margin-left: 2vw;
    width: 96vw;
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
    margin: 4vh;
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