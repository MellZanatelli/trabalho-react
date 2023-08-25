import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Aside = styled.aside`
  background-color: ${colors.branco};
  border-radius: 1rem;
  padding: 1rem;
  width: 70%;
  picture{
    padding: 5rem;
    padding-bottom: 0;
    padding-top: 0;
  }
  h3{
    font-weight: bold;
    font-family: "New Rocker";
    padding: 1rem;
  }
  align-items: center;
  justify-content: center;
  display:flex;
  flex-direction: column;
  border-radius: 0.5rem;
  margin: 1rem;
  ul{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    list-style-type: none;
    li{
      padding: 1rem;
    }
  }
`
