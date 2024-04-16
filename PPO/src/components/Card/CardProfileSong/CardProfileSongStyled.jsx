import styled from "styled-components"

export const CardProfileSongContainer = styled.div`
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

export const IconSong = styled.img`
    height: ${(props) => (props.isMobile ? '16rem' : '20rem')};
    width: ${(props) => (props.isMobile ? '16rem' : '20rem')};
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
`

export const LeftSong = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerSong = styled.div`
    display: flex;
    flex-direction: row;

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        padding: 1rem;

        div {
            display: flex;
            flex-direction: row;
            
            img {
                width: 3rem;
                height: 3rem;
                object-fit: cover;
                border-radius: 40px;
            }

            .feeling-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 1rem;
                font-size: 3rem;
            }
        }

        .author-container{
            align-items: center;
        }
    }
`