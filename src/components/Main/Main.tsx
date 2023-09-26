import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  
  color: ${({ theme }) => theme.primary};
`

export default Main