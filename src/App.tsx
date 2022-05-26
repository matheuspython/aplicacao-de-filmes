import React from 'react'
import { Header } from './components/Header'
import { Global } from './global/styles'
export const App:React.FC = () => {
  return (
    <div className="App">
      <Global />
      <Header />
    </div>
  )
}

