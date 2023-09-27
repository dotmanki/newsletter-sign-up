import styled from 'styled-components'

const Hero = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.sizes.mobileHeroHeight};
  background-image: url('${({ theme }) => theme.paths.mobileHero}');
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    width: 80%;
    background-image: url('${({ theme }) => theme.paths.desktopHero}');
    background-position: right;
    height: ${({ theme }) => theme.sizes.desktopHeroHeight};
  }
`

export default Hero
