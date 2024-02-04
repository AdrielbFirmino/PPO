import styled from 'styled-components';

export const SearchPost = styled.div`
    display: flex;
    background-color: black;
    color: white;
    border-bottom: 2px solid rgb(122, 5, 212);
    margin-top: 2vh;
    width: 40vw;
    margin-left: 20vw;
    justify-content: left;
    padding-left: 2vw;
    border-radius: 8px;

    i {
        display: flex;
        align-items: center;
        padding-right: 1vw;
    }

    input {
        background-color: black;
        color: white;
        border: none;
        outline: none;
        width: 35vw;
    }
`

export const TitleForumPage = styled.h2`
    color: white;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-bottom: 1rem;

`

export const CardPost = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(16, 16, 16);
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

`

export const IconPost = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 40px;
    object-fit: cover;
    cursor: pointer;
`

export const TitlePost = styled.h4`
    margin-left: 2rem;
    color: white;
`

export const LeftPost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const CenterPost = styled.div`
    display: flex;
    background-color: black;
    width: 55vw;
    border-radius: 4px;
    color: white;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;
`

export const RightPost = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
`

export const CardMain = styled.div`
    display: flex;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    flex-direction: column;
    margin-left: 10vw;
    width: 80vw;
    height: 135vh;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`