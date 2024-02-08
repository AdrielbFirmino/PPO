import styled, {keyframes} from "styled-components"

export const MainAuthDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
`
export const RightSideDiv = styled.div`
    display: flex;
    width: 30vw;
    height: 100vh;
    background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
    border: 2px solid rgba(78, 17, 125, 1);
    border-bottom: none;
    border-top: none;
    border-right: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    align-items: center;
    color: white;
    flex-direction: column;

    h1 {
        padding-top: 4rem;
        font-size: 2.5em;
    }
    P {
        padding-top: 0.5rem;
        text-align: center;
    }
    hr {
        width: 25vw;
        margin-top: 2vh;
    }
    form {
        padding-left: 1.5vw;
    }
    button {
        margin-top: 2vh;
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
`
export const FormDiv = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 25vw;
    height: ${(props) => (props.isSignInPage ? '35vh' : '46vh')};
    border: 1px solid black;
    border-radius: 4px;
    background-color: rgb(11, 11, 11);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    text-align: left;

    label {
        display: flex;
        align-self: baseline;
        padding-left: 2vw;
    }

    input {
        border: 1px solid rgba(78, 17, 125, 1);
        width: 20vw;
        padding: 0.5rem;
        border-radius: 6px;
        background-color: black;
        color: white;
        outline: none;
    }
`
export const LeftSideDiv = styled.div`
    display: flex;
    width: 70vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const ImageLogo = styled.img`
    width: 6rem;
    height: 6rem;
    object-fit: cover;
    cursor: pointer;
`
export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    color: white;

    h1 {
        font-size: 4em;
        text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

const animated = keyframes`
    from{
        color: rgb(56, 1, 98);
        text-shadow: none;
    }
    to{
        color: rgb(134, 1, 235);
        text-shadow: 0 0 10px rgb(118, 0, 208);
    }
`
export const NoteStyled = styled.h1`
    color: rgb(56, 1, 98);
    text-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    animation: ${animated} 4s alternate ease-out infinite;
`
export const SingUpText = styled.p`
    border: none;
    color: rgb(122, 5, 212);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    font-size: 1rem;
`