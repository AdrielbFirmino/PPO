import styled from 'styled-components';

export const PaginationBoxContainer = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-bottom: 2vh;
    justify-content: center;

    i {
        font-size: 3vh;
        display: flex;
        align-items: center;
    }
`
export const PaginationBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: ${({ isActive }) => isActive ? 'black' : 'transparent'};
        border: 3px solid black;
        border-radius: 90px;
        width: 2vw;
        height: 2vw;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        cursor: pointer;
    }
`