import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import RoutePaths from '../types/RoutePaths'
import KeywordHistory from '../components/KeywordHistory'

export default function HistoryPage() {
  const { imageSearchKeywords, videoSearchKeywords } = useContext(AppContext)

  return (
    <div className="grid grid-flow-col mt-5 mb-5">
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
