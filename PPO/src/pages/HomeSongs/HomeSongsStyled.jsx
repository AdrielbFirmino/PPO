import styled from "styled-components";

export const FullPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 2.5vh;
`

export const MainContainer = styled.div`
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgb(122, 5, 212);

    .top-container {
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding: 1em;
        font-size: 1.5rem;

        h1{
            color: white;
        }

        div{
            display: flex;
            flex-direction: column;
            width: 40%;

            form{
            width: 98%;
        
                input {
                    width: 100%;
                    background-color: black;
                    color: grey;
                    border: none;
                    border-bottom: 2px solid rgb(122, 5, 212);
                    border-radius: 6px;
                    outline: none;
                    padding-left: 1rem;
                }
            }
        }
    }
    .bottom-container {
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding: 1em;
        font-size: 1.5rem;

        h1{
            color: white;
        }
    }
`

export const FeelingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    padding: 1rem;
    font-size: 1.8rem;
    
    p{
        background-image: linear-gradient(90deg, rgb(122, 5, 212), rgb(78, 17, 125));
        background-repeat: no-repeat;
        background-size: 0% 3px;
        background-position: left bottom;
        transition: background-size 500ms ease;
        color: white;
        cursor: pointer;
        text-decoration: none;
        font-weight: 300;

        &:hover {
            background-size: 100% 3px;
        }
    }
`