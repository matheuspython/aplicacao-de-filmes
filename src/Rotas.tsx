import React from 'react';
import {  
  Route,
  Routes
} from 'react-router-dom';
import { UserContextProvider } from './components/context/loginContext';
import { FilmApp } from './pages/FilmApp'
import { Login } from './pages/Login';


export const Rotas: React.FC = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/app" element = {<FilmApp />}/>
        <Route path='/' element={<Login />} />
      </Routes>
    </UserContextProvider>
  )
}