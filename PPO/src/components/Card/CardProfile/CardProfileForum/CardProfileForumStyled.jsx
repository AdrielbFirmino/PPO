import styled from "styled-components";

export const SideBarPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 5vw;
    margin-right: 1vw;
    margin-bottom: 1rem;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border: none;
        background-color: transparent;
        cursor: pointer;

        i {
            font-size: 3rem;
            color: white;
            transition: all 0.4s ease-in-out;

            &:hover {
                color: rgb(122, 5, 212);
            }
        }        
    }

    .DeleteButton {
        border-bottom: 2px solid rgb(63, 20, 165);
    }
`
export const CardProfilePostContainer = styled.div`
    display: flex;
    flex-direction: row;

    .Card {
        width: 100%;
    }
    
    .edit-form {
        display: grid;
        flex-direction: column;
        color: white;
        width: 100vw;
        padding: 2rem;

        label {
            margin-top: 2vh;
        }

        input {
            background-color: black;
            color: grey;
            border: 2px solid rgb(122, 5, 212);
            border-radius: 6px;
            height: 4vh;
            outline: none;
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
            margin-top: 2vh;
        }

        .conteudo {
            background-color: black;
            color: grey;
            border: 2px solid rgb(122, 5, 212);
            border-radius: 6px;
            height: 10vh;
            outline: none;
        }
    }
`