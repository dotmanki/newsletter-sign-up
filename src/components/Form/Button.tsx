import styled from 'styled-components';
import { StyledTextField } from './TextField';

const Button = styled(StyledTextField).attrs({as: 'button'})`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-weight: 700;
  font-size: 16px;
`

export default Button