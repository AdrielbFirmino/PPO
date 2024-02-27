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
            font-size: 3vh;
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
`