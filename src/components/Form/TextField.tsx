import styled from 'styled-components'
import Label from './Label'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import LabelError from './LabelError'
import LabelContainer from './LabelContainer'

interface Props {
  label: string
  name: string
  type?: string
  error?: FieldError
  placeholder?: string
}
export const StyledTextField = styled.input<Omit<Props, 'label'>>`
  padding: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.charGrey};
  ${({ error, theme }) =>
    error &&
    `background-color: ${theme.colors.bgRed}; color: ${theme.colors.red}; border-color: ${theme.colors.red};`}
  font-size: 16px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, name, type = 'text', error, ...props }, ref) => {
    return (
      <StyledContainer>
        <LabelContainer>
          <Label htmlFor={name}>{label}</Label>
          {error && <LabelError>{error.message}</LabelError>}
        </LabelContainer>
        <StyledTextField
          type={type}
          name={name}
          id={name}
          ref={ref}
          error={error}
          {...props}
        />
      </StyledContainer>
    )
  }
)
