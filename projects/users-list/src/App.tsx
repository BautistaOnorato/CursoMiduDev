import { useMemo, useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'
import { SortBy, type User } from './types.d'
import { useUsers } from './hooks/useUsers'

function App() {
  
  const { isLoading, isError, users, refetch, hasNextPage, fetchNextPage } = useUsers()

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleReset = async () => {
    await refetch()
  }

  const handleChangeSort = (sort: SortBy) => {
    const newSortingValue = sorting === sort ? SortBy.NONE : sort
    setSorting(newSortingValue)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    let sortedFn = (a: User, b: User) => a.location.country.localeCompare(b.location.country)
    
    if (sorting === SortBy.NAME) {
      sortedFn = (a: User, b: User) => a.name.first.localeCompare(b.name.first)
    }

    if (sorting === SortBy.LAST) {
      sortedFn = (a: User, b: User) => a.name.last.localeCompare(b.name.last)
    }

    return filteredUsers.toSorted(sortedFn)
  }, [filteredUsers, sorting])

  return (
    <div className='App'>
      <h1 onClick={() => console.log(sorting)}>Usuarios: {users.length}</h1>
      <header>
        <button onClick={toggleColors} style={{ background: showColors ? '#646cff' : '#1a1a1a'}}>
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry} style={{ background: sorting === SortBy.COUNTRY ? '#646cff' : '#1a1a1a'}}>
          Ordenar por país
        </button>
        <button onClick={handleReset}>
          Recuperar usuarios
        </button>
        <input 
          type="text" 
          placeholder='Argentina' 
          onChange={(e) => {
            setFilterCountry(e.target.value)
          }}
        />
      </header>
      <main>
        {users.length > 0 && <UsersList changeSorting={handleChangeSort} showColors={showColors} users={sortedUsers} />}
        {isLoading && <p>Cargando...</p>}
        {!isLoading && isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}
        {!isLoading && !isError && hasNextPage ?
            <button onClick={async () => { await fetchNextPage() }}>Ver más resultados</button>
            :
            <p>No hay más resultados</p>
        }
      </main>
    </div>
  )
}

export default App
