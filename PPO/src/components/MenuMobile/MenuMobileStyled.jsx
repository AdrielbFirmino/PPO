import styled from 'styled-components';

export const ContainerMenu = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: row;

    i {
        font-size: 3rem;
        margin-right: 1vw;
    }
`;

export const MenuOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1vw;
    h4 {
        cursor: pointer;
        color: rgb(122, 5, 212);
        border-bottom: 1px solid white;
    }
`;