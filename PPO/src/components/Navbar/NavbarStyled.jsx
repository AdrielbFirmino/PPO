import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 98%;
    padding: 1rem;
    background-color: transparent;
    backdrop-filter: blur(2px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    z-index: 1;
    color: white;
`
export const ImageLogo = styled.img`
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    cursor: pointer;
`
export const LogoText = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;
`
export const LogoTextSpace = styled.div`
    margin-left: 1rem;
`
export const SwitchForumSong = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ButtonSwitchTop = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    font-size: 1rem;

    &:hover {
    color: rgb(122, 5, 212);
    }
`

export const ButtonLogin = styled.button`
  background-color: rgb(122, 5, 212);
  color: white;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.4rem;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  width: 10%;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-right: 1rem;

  &:hover {
    background-color: rgb(78, 17, 125);
  }
`