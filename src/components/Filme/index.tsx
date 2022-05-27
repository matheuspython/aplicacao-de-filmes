import React from 'react';

import { Container } from './styles';
import { filmeProps } from '../../types/filmeProps';



export const Filme: React.FC<filmeProps> = ({ Plot, Poster, Title }) => {
  return (
    <Container>
      <img src={Poster} alt={Title} />
      <div className="container">
        <h1>{Title}</h1>
        <p>{Plot}</p>
      </div>
    </Container>
  )
}
