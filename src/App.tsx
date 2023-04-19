import useNasaData from './hooks/useNasaData'
import SearchForm from './components/SearchForm'
import ErrorComponent from './components/ErrorComponent'
import SearchResults from './components/SearchResults'

function App() {
  const { loading, error, nasaData, setQuery } = useNasaData()
  return (
    <div className="container">
      <h1>NASA Image Search</h1>
      <SearchForm setQuery={setQuery} />
      <ErrorComponent message={error} />
      {loading ? (
        <center>
          <span className="loader"></span>
        </center>
      ) : (
        <div>
          <SearchResults data={nasaData} />
        </div>
      )}
    </div>
  )
}

export default App
