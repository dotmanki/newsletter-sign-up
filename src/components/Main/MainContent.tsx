import styled from 'styled-components'

const MainContent = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 768px) {
    justify-content: center;
  }
`

export default MainContent
