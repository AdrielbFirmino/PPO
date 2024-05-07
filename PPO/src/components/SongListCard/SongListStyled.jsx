import styled from "styled-components";

export const SongContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(16, 16, 16);
    border-radius: 4px;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    background-image: linear-gradient(90deg, rgb(122, 5, 212), rgb(78, 17, 125));
    background-repeat: no-repeat;
    background-size: 0% 3px;
    background-position: left bottom;
    transition: background-size 500ms ease;

    &:hover {
        background-size: 100% 3px;
    }

    .side-container{
        display: flex;
        flex-direction: row;
        align-items: center;

        section{
            display: flex;
            flex-direction: column;

            h1{
                font-size: 4rem;
                cursor: pointer;
                transition: background-size 500ms ease;

                &:hover {
                    color: rgb(122, 5, 212);
                }
            }

            .author-row{
                display: flex;
                flex-direction: row;
                align-items: center;

                img {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 100%;
                    object-fit: cover;
                    margin-right: 1rem;
                }
            }
        }
    }
`

export const LeftContainer = styled.div`
    display: flex;
    padding: 2vw;
    justify-content: center;

    img {
        width: 16rem;
        height: 16rem;
        border-radius: 8px;
        object-fit: cover;
        cursor: pointer;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 1vw;
    font-size: 3rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
    }
`