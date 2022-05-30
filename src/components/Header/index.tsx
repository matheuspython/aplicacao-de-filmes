import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  nick?: string
}

export const Header: React.FC<HeaderProps> = ({ nick }) => {
  return (
    <Container>
      <div className="container">
        {nick && `seja bem vindo ${nick}`}
        {!nick && 'filmes tops'}

      </div>
    </Container>
  )
}
