import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.branco};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.dark};
    border: 0.2rem solid ${colors.rosa};
    border-radius: 1rem;
    padding: 1.5rem;
    label {
        color: ${colors.azul};
    }
    div {
      background-color: ${colors.preto};
      border: 0.15rem solid ${colors.rosa};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.azul};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
        color: ${colors.branco};
        
      }
    }
    p {
      margin-top: 1rem;
      color: ${colors.rosa};
      a {
        text-decoration: none;
        color: ${colors.branco};
        font-weight: bold;
        margin-right: 1rem;
      }
      button {
        background-color: ${colors.preto};
        border: 0.1rem solid ${colors.rosa};
        color: ${colors.branco};
        padding: 1rem;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }
`