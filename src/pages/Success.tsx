import styled from 'styled-components'
import Button from '../components/Form/Button'
import Title from '../components/Heading/Title'
import SuccessHero from '../components/Hero/SuccessHero'
import Main from '../components/Main/Main'
import MainContent from '../components/Main/MainContent'
import Paragraph from '../components/Paragraph/Paragraph'
import Span from '../components/Span/Span'
import { useNavigate } from 'react-router-dom'
import SuccessContainer from '../components/Main/SuccessContainer'

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 10rem;

  @media (min-width: 768px) {
    margin-bottom: 1.2rem;
  }
`

const Success = () => {
  const navigate = useNavigate()
  const email = localStorage.getItem('email')
  return (
    <Main>
      <SuccessContainer>
        <MainContent>
          <SuccessHero />
          <Title>Thanks for subscribing!</Title>
          <StyledParagraph>
            A confirmation email has been sent to{' '}
            <Span>{email || 'ash@loremcompany.com'}</Span>. Please open it and
            click the button inside to confirm your subscription
          </StyledParagraph>

          <Button onClick={() => navigate('/')}>Dismiss message</Button>
        </MainContent>
      </SuccessContainer>
    </Main>
  )
}

export default Success
