import { useEffect, useState } from 'react'
import { Item, SearchResult } from '../types/SearchResponse'

export default function useNasaData() {
  const [loading, setLoading] = useState(false)
  const [nasaData, setNasaData] = useState<Item[]>([])
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  useEffect(() => {
    async function queryNasa(query: string) {
      if (query.length == 0) {
        return
      }
      setLoading(true)
      setError('')
      setNasaData([])
      try {
        const response = await fetch(
          'https://images-api.nasa.gov/search?q=' + query
        )
        if (response.ok) {
          const jsonData: SearchResult = await response.json()
          setNasaData(jsonData.collection.items)
        } else {
          setError('Error getting search results from NASA')
        }
      } catch (e) {
        const error = e as Error
        setError('Error connecting to NASA: ' + error.message)
      }
      setLoading(false)
    }
    queryNasa(query)
  }, [query])
  return {
    loading,
    error,
    nasaData,
    setQuery,
    query,
  }
}
