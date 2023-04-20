import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import RoutePaths from '../types/RoutePaths'
import { Keyword } from '../types/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import KeywordHistory from '../components/KeywordHistory'

export default function HistoryPage() {
  const { imageSearchKeywords, videoSearchKeywords } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className="container-sm grid grid-cols-2 mt-5">
      <KeywordHistory
        urlPath={RoutePaths.imageSearch}
        title="Image Search Keywords"
        searchKeywords={imageSearchKeywords}
      />
      <KeywordHistory
        urlPath={RoutePaths.videoSearch}
        title="Video Search Keywords"
        searchKeywords={videoSearchKeywords}
      />
    </div>
  )
}
