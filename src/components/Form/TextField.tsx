import styled from 'styled-components'
import Label from './Label'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}
export const StyledTextField = styled.input`
  padding: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.charGrey};
  font-size: 16px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextField = ({ label, ...props }: TextFieldProps) => {
  return (
    <StyledContainer>
      <Label>{label}</Label>
      <StyledTextField {...props} />
    </StyledContainer>
  )
}
