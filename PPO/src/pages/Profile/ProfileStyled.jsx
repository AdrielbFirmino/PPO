import styled from "styled-components";

export const CardMain = styled.div`
    display: flex;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    border: 2px solid rgb(110, 50, 236);
    flex-direction: column;
    margin-left: 2vw;
    width: 96vw;
    height: 100%;
    border-radius: 8px;
    border-bottom: none;
`

export const TopProfileDiv = styled.div`
    display: flex;
    color: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    img {
        width: 12vw;
        height: 12vw;
        border-radius: 200px;
        object-fit: cover;
    }
`

export const MenuProfileIcon = styled.div`
    display: flex;
    flex-direction: column;
    height: 12vw;
    i{
        display: grid;
        justify-content: end;
        font-size: 3em;
        cursor: pointer;
    }
`
export const MenuDotIcon = styled.div`
    h3 {
        border-bottom-color: transparent;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        
        &:hover {
            border-bottom:2px solid rgb(78, 17, 125);
        }
    }
`;

export const TopProfileLeftDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const TopProfileMidDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 2vw;

    h1 {
        font-size: 3.5vw;
    }
`

export const ButtonsPostSong = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5vh;

    button {
        background-color: rgb(122, 5, 212);
        color: white;
        border: none;
        outline: none;
        border-radius: 3px;
        padding: 0.5rem;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: 0.1rem;
        margin: 1rem;
        width: 8vw;

        &:hover {
            background-color: rgb(78, 17, 125);
        }
    }
`

export const MidLine = styled.hr`
    width: 75vw;
    align-self: center;
    margin-bottom: 2vh;
`

export const PostProfileShowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding-bottom: 1.5vh;

    i {
        cursor: pointer;
        display: flex;
        font-size: 3vh;
        margin-left: 3vh;
        justify-content: center;
    }
`

export const UserPost = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;

    i {
        color: white;
    }
`

export const NewPostContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    background-color: rgb(16, 16, 16);
    border-bottom: 2px solid green;
    border-radius: 4px;
    color: white;
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    i {
        transition: all 0.4s ease-in-out;
        display: flex;
        align-items: center;
        font-size: 4rem;
        padding: 1rem;
    }

    &:hover {
        i{
            color: green;
        }
        color: green;
    }
`
export const NewPostFormContainer = styled.div`
    display: grid;
    color: white;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    

    form {
        display: grid;
        flex-direction: column;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        text-decoration: none;
        
        input {
          border:1px solid rgb(78, 17, 125);
          border-radius: 6px;
          outline: 0;
        }

        textarea {
          border:1px solid rgb(78, 17, 125);
          border-radius: 6px;
          outline: 0;
          background-color: black;
          height: 10vh;
        }

        label {
            margin-top: 2vh;
            margin-bottom: 1.5vh;
        }

        button {
        justify-self: center;
        margin-left: 1rem;
        width: 25vw;
        background-color: rgb(122, 5, 212);
        color: white;
        border: none;
        outline: none;
        border-radius: 3px;
        font-size: 1rem;
        padding: 0.4rem;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: 0.1rem;
        margin-right: 1rem;

            &:hover {
                background-color: rgb(78, 17, 125);
            }
        }
    }
`