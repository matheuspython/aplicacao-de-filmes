import React, { useEffect, useState } from 'react';
import { filmeProps } from '../../types/filmeProps';
import { Filme } from '../Filme';

import { Container } from './styles';



export const Main: React.FC = () => {
  const [filmName, setFilmName] = useState('') 
  const [filmList, setFilmList] = useState<filmeProps[]>([])

  const searchFilm = async () => {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d6c1c92a&t=${filmName}`)
    const data = await response.json() as filmeProps

    setFilmList([...filmList, data])
    setFilmName('')
  }
  

  return (
    <Container>
      <header>
        <input 
          className='searchField' 
          type="text" 
          placeholder='digite seu filme aqui' 
          onChange={text => setFilmName(text.target.value)}
        />
        <button onClick={() => {searchFilm()}} className='btn-search'>buscar</button>
      </header>
      <main>
        <div className="container">
          <ul>
            { filmList.map(filme => (<Filme Plot={filme.Plot} Poster={filme.Poster} Title={filme.Title} key={filme.Poster} />)) }
          </ul>
        </div>
      </main>
    </Container>
  )
}
