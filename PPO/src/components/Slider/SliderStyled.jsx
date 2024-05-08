import styled from "styled-components";

export const SliderContainer = styled.section`
    margin: 0 auto;
    width: 100%;
    max-width: 80%;
    height: auto;
    padding: 0;

    .inner{
        display: flex;
    }

    .item{
        min-height: 200px;
        min-width: 200px;
        margin: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
            h3 {
                background-size: 100% 3px
            }
            
        }

        h3{
            color: white;
            margin: 0.8rem;
            background-image: linear-gradient(90deg, rgb(122, 5, 212), rgb(78, 17, 125));
            background-repeat: no-repeat;
            background-size: 0% 3px;
            background-position: left bottom;
            transition: background-size 500ms ease;
        }

        h4{
            color: rgb(122, 5, 212);
        }
    }

    .item img{
        width: 24rem;
        height: 24rem;
        border-radius: 12px;
        pointer-events: none;
        @media screen and (min-width: 1440px) {
            width: 20rem;
            height: 20rem;
        }
    }

    .carousel{
        cursor: grab;
        overflow: hidden;
    }
`