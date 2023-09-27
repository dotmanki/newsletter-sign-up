import Form from '../components/Form/Form'
import Title from '../components/Heading/Title'
import Li from '../components/List/Li'
import Ul from '../components/List/Ul'
import Main from '../components/Main/Main'
import Paragraph from '../components/Paragraph/Paragraph'
import Button from '../components/Form/Button'
import { TextField } from '../components/Form/TextField'
import MainContent from '../components/Main/MainContent'
import Container from '../components/Main/Container'
import Hero from '../components/Hero/Hero'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Register, registerSchema } from '../schemas/register'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = handleSubmit((data) => {
    localStorage.setItem('email', data.email)
    navigate('/success')
  })

  return (
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
          <Form onSubmit={onSubmit}>
            <TextField
              label='Email address'
              type='email'
              placeholder='Email address'
              error={errors.email}
              {...register('email')}
            />

            <Button>Subscribe to monthly newsletter</Button>
          </Form>
        </MainContent>
      </Container>
    </Main>
  )
}

export default App
