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
    <div className="w-full max-w-xs place-self-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formSubmitted}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="search"
          >
            Keyword
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            name="search"
            value={searchTerm}
            onChange={newSearchTerm}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
