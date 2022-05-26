import React from 'react';

import { Container } from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <header>
        <input className='searchField' type="text" placeholder='digite seu filme aqui' />
        <button className='btn-search'>buscar</button>
      </header>
      <main>
        
      </main>
    </Container>
  )
}
