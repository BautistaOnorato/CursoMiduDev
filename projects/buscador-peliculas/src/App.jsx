import { useState, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 500), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Busca tu película</h1>
        <form className='form' onSubmit={handleSubmit} autoComplete='off'>
          <input
            name='search'
            value={search}
            placeholder='Avengers, Star wars, Harry Potter ...'
            onChange={handleChange}
          />
          <input type='checkbox' onChange={handleSort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
