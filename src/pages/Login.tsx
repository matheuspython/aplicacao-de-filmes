import React, { useContext } from 'react';
import { Header } from '../components/Header';
import { MainForm } from '../components/MainForm';
import { Global } from '../global/styles';


import context from '../context/loginContext'

export const Login: React.FC = () => {
  const {state} = useContext(context)
  console.log(state.name)
  return(
    <>
      <Global />
      <Header nick={state.name}/>
      <MainForm />
    </>
  )
}
