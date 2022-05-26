import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Global } from './global/styles'
export const App:React.FC = () => {
  return (
    <>
      <Global />
      <Header />
      <Main />
    </>
  )
}

