import * as S from "./styles";
export interface ICard {
  nome: string
  foto: img
  mensagem: string
}
export const Card = ({ nome, foto}: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Data: </strong> {nome}
      </h3>
      <h4>Título: {titulo}</h4>
      <p>Mensagem: {mensagem}</p>
    </S.Aside>
  );
};
