import styled from 'styled-components';

export const SearchPost = styled.div`
    display: flex;
    background-color: black;
    color: white;
    border-bottom: 2px solid rgb(122, 5, 212);
    margin-top: 2vh;
    width: 40vw;
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
        width: 30vw;
        border-radius: 4px;
    }

    button{
        background-color: black;
        border: none;
        cursor: pointer;
        border-radius: 6px;
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
    border-bottom: 2px solid rgb(63, 20, 165);
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    color: white;

    section {
        display: flex;
        align-items: center;

        h3 {
            line-height: 2rem;
            font-size: 2.5rem;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &:hover {
                color: rgb(122, 5, 212);
            }
        }
    }
`

export const IconPost = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 40px;
    object-fit: cover;
`

export const LeftPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 10vw;
    border-right: 1px solid grey;
    padding-right: 1vw;
    justify-content: center;
`

export const RightPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 1vw;
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
    width: 90vw;
    height: 100%;
    border-radius: 8px;
    margin-top: 2.5vh;

    .top-cont {
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
            display: flex;
            font-size: 6rem;
            color: white;
            justify-content: center;
            cursor: pointer;
            transition: all 0.4s ease-in-out;

            &:hover {
                color: rgb(122, 5, 212);
            }
        }
    }
`
export const FeelingTitle = styled.h1`
    color: white;
    padding: 1rem;
`