import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  justify-content: left;
  @media (max-width: 1200px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`

export const SectionI = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  justify-content: left;
  @media (max-width: 1100px) {
    grid-template-columns: auto;
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`
