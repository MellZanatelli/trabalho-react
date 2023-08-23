import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
    display: flex;
    flex-direction: row;
    height: 4rem;
    background-color: #5B03A0;
    align-items: center;
    right: 0;
    left: 0;
    top: 0;
`

export const Picture = styled.picture`
  /*Logo*/
  padding-left: 3rem;
  padding-right: 4rem;
  height: 80%;
  align-items: center;
  display: flex-end;
  img {
    height: 100%;
  }
`
export const Espaco = styled.article`
  padding: 1rem;
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
  height: 80%;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: ${colors.preto};
        font-family: "Press Start 2P";
      }
    }
    li#entrar {
      border-width: 2px;
      border-top: solid ${colors.azul};
      border-left: solid ${colors.rosa};
      border-right: solid ${colors.azul};
      border-bottom: solid ${colors.rosa};
      border-radius: 2px;
    }
    li#cadastrar {
      padding: 1.4rem 1rem 1.4rem 1rem;
      border-radius: 0.5rem;
      background-image: linear-gradient( ${colors.azul}, ${colors.rosa});
    }
    li:hover {
      text-decoration: underline;
    }
  }

`