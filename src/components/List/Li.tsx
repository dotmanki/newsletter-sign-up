import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  gap: 1rem;
  &::before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    background-image: url('icon-list.svg');
    background-repeat: no-repeat;
    background-size: 1.2rem;
  }
`

export default Li