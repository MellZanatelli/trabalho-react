import * as S from "./styles"
import Logo from "../../assets/logo.png"

export function Header() {
  return (
    <S.Header>
      <S.Picture>
        <img src={Logo} alt="Logo" />
      </S.Picture>
      <S.NavBar>
        <ul>
          <li id="entrar">
            <a href="entrar.html">Entrar</a>

          </li>

          <li id="espaco"></li>

          <li id="cadastrar">
            <a href="">Cadastrar</a>
          </li>
        </ul>
      </S.NavBar>
      <S.Espaco/>
    </S.Header>
  )
}