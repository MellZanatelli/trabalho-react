import * as S from "./styles";
import Info from "../../assets/info.png"
import Fav from "../../assets/fav.png"
import Compartilhar from "../../assets/compartilhar.png"

export interface ICard {
  nome: string
  foto: string
}
export const Card = ({ nome, foto }: ICard) => {
  return (
    <S.Aside>
      <h3>{nome}</h3>
      <picture>
        <img src={foto} alt="" />
      </picture>
      <ul>
        <li>
          <a href="">
            <img src={Info} alt="Informações" />
          </a>
        </li>

        <li>
          <a href="">
            <img src={Fav} alt="Favoritar" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Compartilhar} alt="Compartilhar" />
          </a>
        </li>
      </ul>
    </S.Aside>
  );
};
