import { useEffect, useState, useRef } from 'react'

export const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Ingrese el nombre de una película')
      return
    }

    if (search.length < 3) {
      setError('Minimo tres caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
