import styled from 'styled-components'
import { StyledTextField } from './TextField'

const Button = styled(StyledTextField).attrs({ as: 'button' })`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 16px;
  border: none;

  &:hover {
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.fromAccent} 0%,
      ${({ theme }) => theme.colors.toAccent} 100%
    );
    cursor: pointer;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.25);
  }
`

export default Button
