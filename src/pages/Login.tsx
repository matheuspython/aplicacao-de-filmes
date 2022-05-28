import React from 'react';
import { Header } from '../components/Header';
import { MainForm } from '../components/MainForm';
import { Global } from '../global/styles';

export const Login: React.FC = () => {
  return(
    <>
      <Global />
      <Header />
      <MainForm />
    </>
  )
}
