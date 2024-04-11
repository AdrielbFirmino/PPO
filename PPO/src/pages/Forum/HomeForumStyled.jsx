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
        color: ${({ isActive }) => isActive ? 'rgb(122, 5, 212)' : 'white'};
        width: 2vw;
        height: 2vw;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        cursor: pointer;
    }
`

export const FullPageContainerForum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`