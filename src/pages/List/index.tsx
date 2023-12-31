import * as S from './styles'
import { dados } from "../../services/dados"
import { dados2 } from "../../services/dados"
import { ComponentCard } from '../../components'
import { ComponentMenu } from '../../components'

export function List() {
  return (
    <>
      <ComponentMenu/>
      <S.Section>
        {dados.map(item => (
          <ComponentCard
            key={item.id}
            nome={item.nome}
            foto={item.foto}
          />
        ))}
      </S.Section>
      <S.SectionI>
        {dados2.map(item => (
          <ComponentCard
            key={item.id}
            nome={item.nome}
            foto={item.foto}
          />
        ))}
      </S.SectionI>
    </>
  )
}
