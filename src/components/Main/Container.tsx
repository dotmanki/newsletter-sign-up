import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: 2rem;
    gap: 2.5rem;
  }
`

export default Container
