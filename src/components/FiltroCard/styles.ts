import styled from 'styled-components'

type Props = {
  ativo: boolean
}

// type PropsSemLegendaEcontandor = Omit<
//   Props,
//   'legenda' | 'contador' | 'criterio'
// >

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#FFF' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
`
