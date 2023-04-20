import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface SearchFormProps {
  setQuery: (event: string) => void
}

export default function SearchForm({ setQuery }: SearchFormProps) {
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const formSubmitted = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery(searchTerm)
  }
  const newSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  useEffect(() => {
    if (searchParams.has('q')) {
      const term = searchParams.get('q') as string
      if (term != searchTerm) {
        setSearchTerm(term)
      }
    }
  }, [searchParams])

  return (
    <form onSubmit={formSubmitted}>
      <input name="search" value={searchTerm} onChange={newSearchTerm} />
      <button type="submit">Search</button>
    </form>
  )
}
