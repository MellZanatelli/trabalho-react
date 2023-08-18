import * as S from './styles'
import Spy from "../../assets/aranha.png"
import Bat from "../../assets/morcego.png"
import Seta from "../../assets/truckright.png"
import SetaI from "../../assets/truckright.png"
import Mais from "../../assets/truckright.png"

export function Home() {
  return (
    <S.Section>
      <S.SectionI>
        <p>Não tem uma conta? <br /> Cadastre-se <br />gratuitamente!</p>
        <ul id="cad">
          <li>
            <ul id="cadastro">
              <li id="link">
                <a href="">Começar</a>
              </li>
              <S.Espaco />
              <li>
                <img src={Seta} alt="Seta" />
              </li>
            </ul>
          </li>
          <li id="rosa">
            <a href="entrar.html">Já tenho uma conta!</a>
          </li>

        </ul>

        <img src={Spy} alt="Spy" />
      </ S.SectionI>



      <S.SectionII>
        <div>
          <p id="I">Faça seu RPG balanceado, fácil </p>
          <p id="II">e totalmente balanceado!</p>
        </div>
      </ S.SectionII>

      <S.SectionIII>
        <picture>
          <img src={Bat} alt="Bat" />
        </picture>
        <S.Lista>
          <ul id="lista">
            <li>Crie seus cenários</li>
            <li>Dê vida aos seus personagens</li>
            <li>Convide seus amigos</li>
          </ul>

          <S.Exemplo>
            <li id="seta">
              <img src={SetaI} alt="Seta" />
            </li>
            <li id="exemplo">
              Confira alguns exemplos clicando em
            </li>
            <li>
              <a href="">
                <img src={Mais} alt="Mais" />
              </a>
            </li>
          </S.Exemplo>
        </S.Lista>
      </S.SectionIII>
    </S.Section>
  )
}
