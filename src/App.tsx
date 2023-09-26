import { ThemeProvider } from 'styled-components'
import Form from './components/Form/Form'
import Title from './components/Heading/Title'
import Li from './components/List/Li'
import Ul from './components/List/Ul'
import Main from './components/Main/Main'
import Paragraph from './components/Paragraph/Paragraph'
import GlobalStyles from './utils/GlobalStyles'
import theme from './utils/theme'
import Button from './components/Form/Button'
import { TextField } from './components/Form/TextField'
import MainContent from './components/Main/MainContent'
import Container from './components/Main/Container'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Container>
          <Hero />
          <MainContent>
            <Title>Stay updated!</Title>
            <Paragraph>
              Join 60,000+ product managers receiving monthly updates on:
            </Paragraph>
            <Ul>
              <Li>Product discovery and building what matters</Li>
              <Li>Measuring to ensure updates are a success</Li>
              <Li>And much more!</Li>
            </Ul>
            <Form>
              <TextField
                type='email'
                name='email'
                placeholder='email@company.com'
                label='Email address'
              />
              <Button>Subscribe to monthly newsletter</Button>
            </Form>
          </MainContent>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default App
