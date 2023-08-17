import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
    display: flex;
    flex-direction: row;
    height: 4rem;
    background-color: #5B03A0;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    margin-bottom: 4rem;
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;
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
  
    li:hover {
      text-decoration: underline;
    }
  }

`