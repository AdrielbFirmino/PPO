import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 2rem;

    i {
        margin-right: 3vh;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
            color: rgb(122, 5, 212);
        }
    }
`