import SearchForm from '../components/SearchForm'
import ErrorComponent from '../components/ErrorComponent'
import SearchResults, { Result } from '../components/SearchResults'
import { useSearchParams } from 'react-router-dom'
import useNasaData from '../hooks/useNasaData'
import { useEffect } from 'react'
import { Keyword } from '../types/AppContext'
import Loader from './Loader'

interface SearchProps {
  filterBy: string
  keywordHistory: Keyword[]
  setKeywordHistory: (cb: React.SetStateAction<Keyword[]>) => void
}

export default function Search({
  filterBy,
  keywordHistory,
  setKeywordHistory,
}: SearchProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const { loading, error, nasaData, setQuery, query } = useNasaData()

  const setSearch = (term: string) => {
    setSearchParams((prev) => {
      prev.set('q', term)
      return prev
    })
  }

  useEffect(() => {
    if (searchParams.has('q')) {
      const searchTerm = searchParams.get('q') as string
      if (query != searchTerm) {
        setQuery(searchTerm)
      }
    }
  }, [searchParams])
  useEffect(() => {
    if (query.trim().length == 0) {
      return
    }
    let keywords = keywordHistory.filter(
      (prev, idx) => prev.value != query && idx < 4
    )
    keywords.unshift({ id: Date.now(), value: query })
    setKeywordHistory(keywords)
  }, [query])

  return (
    <>
      <SearchForm setQuery={setSearch} />
      <ErrorComponent message={error} />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <SearchResults data={nasaData} filterBy={filterBy} />
        </div>
      )}
    </>
  )
}
