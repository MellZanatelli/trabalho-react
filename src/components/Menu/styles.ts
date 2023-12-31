import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Cabecalho = styled.header`
    display: flex;
    border-bottom: O.5rem solid ${colors.preto};
    picture svg {
        height: 6rem;
        width: 6rem;
    }
    nav {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        ul {
            list-style-type: none;
            display: flex;
            align-items: center;
            li{
                margin: 0 1.5em;
                a{
                    text-decoration: none;
                    font-size: 1.2em;
                    color: ${colors.lilas};
                }
                button {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                    text-decoration: none;
                    font-size: 2rem;
                    color: ${colors.lilas};
                    border: 0;
                    background-color: transparent;
                    cursor: pointer;
                }
            }
        }
    }
`