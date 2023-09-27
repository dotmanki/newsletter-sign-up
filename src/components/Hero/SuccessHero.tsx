import styled from 'styled-components'
import Hero from './Hero'

const SuccessHero = styled(Hero)`
  background-size: 4rem;
  background-position: bottom left;
  height: ${({ theme }) => theme.sizes.mobileSuccessHeroHeight};
  background-image: url('${({ theme }) => theme.paths.iconList}');

  @media (min-width: 768px) {
    height: ${({ theme }) => theme.sizes.desktopSuccessHeroHeight};
  }
`

export default SuccessHero
