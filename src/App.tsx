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

function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
     <img src='illustration-sign-up-mobile.svg' alt='illustration sing up mobile' />
      <Main>
        <Title>Stay Updated!</Title>
        <Paragraph>Join 60,000+ product managers receiving monthly updates on:</Paragraph>
        <Ul>
          <Li>Product discovery and building what matters</Li>
          <Li>Measuring to ensure updates are a success</Li>
          <Li>And much more!</Li>
        </Ul>
        <Form>
          <TextField type="email" name="email" placeholder='email@company.com' label='Email address'/>
          <Button>Subscribe to monthly newsletter</Button>
        </Form>
      </Main>
    </ThemeProvider>
  )
}

export default App
