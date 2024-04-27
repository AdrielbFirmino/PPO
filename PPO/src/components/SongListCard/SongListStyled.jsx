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

    .side-container{
        display: flex;
        flex-direction: row;
        align-items: center;

        section{
            display: flex;
            flex-direction: column;

            h1{
                font-size: 4rem;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 1vw;
    font-size: 3rem;
`