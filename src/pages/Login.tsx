import clsx from 'clsx'
import { Envelope, Lock } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Button } from '../components/atoms/Button'
import { Heading } from '../components/atoms/Heading'
import { Text } from '../components/atoms/Text'
import { TextInput } from '../components/atoms/TextInput'
import Earth from '../svgs/Earth'
import { Logo } from '../Logo'

import '../styles/global.css'

interface LoginProps {
  onEnter(): void
}

function Login({ onEnter }: LoginProps) {
  const [logoControl, setLogoControl] = useState({
    hover: false,
  })

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Earth
          onMouseEnter={() =>
            setLogoControl((prev) => ({
              ...prev,
              hover: true,
            }))
          }
          onMouseLeave={() =>
            setLogoControl((prev) => ({
              ...prev,
              hover: false,
            }))
          }
        />
        <Heading
          size="lg"
          className={clsx('mt-4 transition-opacity duration-[1000ms]', {
            'opacity-0': logoControl.hover === true,
          })}
        >
          <Heading className="mt-4 text-sky-900"> Lz </Heading>{' '}
          <Heading className="mt-4 text-sky-700">Lab</Heading>
        </Heading>

        <Text
          size="sm"
          className={clsx(
            'text-gray-400 mt-1 transition-opacity duration-[1000ms]',
            {
              'opacity-0': logoControl.hover === true,
            }
          )}
        >
          Entre com seu e-mail para acessar a plataforma
        </Text>
      </header>
      <form
        className={clsx(
          'flex flex-col gap-4 items-stretch w-full max-w-sm mt-10 transition-opacity duration-[1000ms]',
          {
            'opacity-0': logoControl.hover === true,
          }
        )}
        onSubmit={(e) => {
          e.preventDefault()
          onEnter()
        }}
      >
        <label htmlFor="email" className="flex flex-col gap-3 text-sky-600">
          <Text size="sm" className="font-semibold text-sky-900">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <Button type="submit" className="mt-4 text-sky-200 hover:text-sky-300">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8"></footer>
    </div>
  )
}

export { Login }
