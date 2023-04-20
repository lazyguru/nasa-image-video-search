import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Search from '../components/Search'

export default function SearchPage() {
  const { videoSearchKeywords, setVideoSearchKeywords } = useContext(AppContext)

  return (
    <div className="container grid place-items-stretch mt-5">
      <div className="font-bold text-xl mb-2 text-white place-self-center">
        NASA Video Search
      </div>
      <Search
        filterBy="video"
        keywordHistory={videoSearchKeywords}
        setKeywordHistory={setVideoSearchKeywords}
      />
    </div>
  )
}
