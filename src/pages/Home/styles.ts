import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

export const SectionI = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  p{
    font-family: "New Rocker";
    color: ${colors.azul};
    font-size: 4rem;
    padding: 2rem;
    text-align: left;
  }
  ul#cad{
    list-style-type: none;
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 2rem;
    ul#cadastro{
      li#link{
        padding: 2rem;
        border-radius: 0.5rem;
        background-image: linear-gradient(${colors.azul}, ${colors.rosa});
        a{
          font-size: 1.7rem;
          font-family: "Press Start 2P";
          color: ${colors.preto};
        }
        display: flex;
        align-items: center;
      }
      display: flex;
      align-items: center; font-family: "New Rocker";
      color: var(--rosa);
      font-size: 6rem;
      line-height: 6rem;
      text-align: center;
      padding: 2rem;
      padding-bottom: 3rem;
      margin: 1px;
      justify-content: center;
      padding: 1rem;
      list-style-type: none;
      li {
        img{
          padding: 2rem;
        }
      }
    }
    li#rosa a{
      color: ${colors.rosa};
      text-decoration: underline;
      font-size: 1.5rem;
      padding: 1rem;
      font-family: "Press Start 2P";
    }
  }
  img {
    padding: 2rem;
    width: 100%;
  }
`

export const SectionII = styled.section`
  p#I{
    font-family: "New Rocker";
    color: ${colors.azul};
    font-size: 6rem;
    line-height: 6rem;
    text-align: center;
    padding: 2rem;
    margin: 1px;
  }
  p#II{
    font-family: "New Rocker";
    color: ${colors.rosa};
    font-size: 6rem;
    line-height: 6rem;
    text-align: center;
    padding: 2rem;
    padding-bottom: 3rem;
    margin: 1px;
  }
`

export const SectionIII = styled.section`
  align-items: center;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  img#bat{
    width: 100%;
    padding: 2rem;
    margin: 2rem;
  }
`

export const Lista = styled.ul`
  padding: 4rem;
  ul#lista{
    color: ${colors.rosa};
    font-family: "Press Start 2P";
    font-size: 2.5rem;
    margin: 2rem;
  }
  
`
export const Exemplo = styled.ul`
  display: inline-flex;
  list-style-type: none;
  align-items: center;
  li#seta{
    padding: 1rem;
  }
  li#exemplo{
    color: ${colors.rosa};
    padding: 2rem;
    font-family: "New Rocker";
    font-size: 3rem;
  }

`


