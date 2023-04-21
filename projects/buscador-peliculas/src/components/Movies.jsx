import React from 'react'

const ListOfMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

const NoResults = () => {
  return (
    <p>No se encontraron películas para esta busqueda</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoResults />
  )
}
