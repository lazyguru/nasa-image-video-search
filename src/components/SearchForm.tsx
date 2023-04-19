import { ChangeEvent, FormEvent, useState } from 'react'

interface SearchFormProps {
  setQuery: (event: string) => void
}

export default function SearchForm({ setQuery }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState('mars')
  const formSubmitted = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery(searchTerm)
  }
  const newSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  return (
    <form onSubmit={formSubmitted}>
      <input name="search" value={searchTerm} onChange={newSearchTerm} />
      <button type="submit">Search</button>
    </form>
  )
}
