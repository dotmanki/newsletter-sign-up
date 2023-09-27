import styled from 'styled-components'
import Label from './Label'

const LabelError = styled(Label)`
  color: ${({ theme }) => theme.colors.red};
`

export default LabelError
