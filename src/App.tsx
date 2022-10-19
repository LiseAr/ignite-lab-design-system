import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'

import './styles/global.css'

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
         <Heading className="mt-4 text-sky-900"> Lz </Heading> <Heading className="mt-4 text-sky-700">Lab</Heading>
        </Heading>
        
        <Text size="sm" className="text-gray-400 mt-1">
          Entre com seu e-mail para acessar a plataforma
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10" onSubmit={(e) => {
          e.preventDefault()
        }}>
        <label htmlFor="email" className="flex flex-col gap-3 text-sky-600">
          <Text size="sm" className="font-semibold text-sky-900">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>

        <Button type="submit" className="mt-4 text-sky-200 hover:text-sky-300">Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
      </footer>
    </div>
  );
}

export default App
