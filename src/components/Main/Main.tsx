import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`

export default Main
