import styled from 'styled-components';

export const SearchPost = styled.div`
    display: flex;
    background-color: black;
    color: white;
    border-bottom: 2px solid rgb(122, 5, 212);
    margin-top: 2vh;
    width: 40vw;
    margin-left: 20vw;
    justify-content: space-around;
    padding-left: 2vw;
    border-radius: 8px;

    i {
        display: flex;
        align-items: center;
        padding-left: 1rem;
        padding-right: 1rem;
        color: white;
        transition: all 0.4s ease-in-out;

        &:hover {
            color: rgb(122, 5, 212);
        }
    }

    input {
        background-color: black;
        color: white;
        border: none;
        outline: none;
        width: 35vw;
    }

    button{
        background-color: black;
        border: none;
        cursor: pointer;
        
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
    color: white;
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
    width: 15vw;
`

export const LeftPost = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 10vw;
`

export const BodyPost = styled.div`
    display: flex;
    background-color: black;
    width: 40vw;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
`

export const RightPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    i {
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
            color: rgb(122, 5, 212);
        }
    }
`

export const ValidationErrorMessage = styled.h5`
    display: flex;
    justify-content: center;
    color: white;
`

export const CardMain = styled.div`
    display: flex;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    flex-direction: column;
    margin-left: 10vw;
    width: 80vw;
    height: 100%;
    border-radius: 8px;
`