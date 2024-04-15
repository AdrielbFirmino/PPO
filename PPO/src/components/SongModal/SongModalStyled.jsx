import styled from "styled-components";

export const ModalContentSong = styled.div`
  background-image: linear-gradient(rgb(31, 31, 31), rgb(10, 10, 10));
  padding: 20px;
  width: 60%;
  border: 2px solid rgb(78, 17, 125);
  border-radius: 12px;

  h2 {
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    
    label {
        margin-top: 2vh;
        color: white;
    }

    input {
        color: white;
        background-color: black;
        outline: none;
        border: 1px solid rgb(122, 5, 212);
        border-radius: 2px;
        padding: 0.5rem;
    }

    button {
        margin-top: 2vh;
        background-color: rgb(122, 5, 212);
        color: white;
        border: none;
        outline: none;
        border-radius: 3px;
        transition: all 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: rgb(78, 17, 125);
        }
    }

    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        i {
          padding: 1rem;
          color: rgb(122, 5, 212);
          font-size: 4rem;
        }

        p {
          color: white;
        }
      }
    }
  }
`