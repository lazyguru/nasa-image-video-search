import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import RoutePaths from '../types/RoutePaths'
import { Keyword } from '../types/AppContext'
import { useNavigate } from 'react-router-dom'

export default function HistoryPage() {
  const { imageSearchKeywords, videoSearchKeywords } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className="container">
      <h2>Image Search Keywords</h2>
      <ol>
        {imageSearchKeywords.map((keyword: Keyword) => {
          return (
            <li>
              <a
                onClick={() => {
                  navigate(RoutePaths.imageSearch + '?q=' + keyword.value)
                }}
              >
                {keyword.value}
              </a>
            </li>
          )
        })}
      </ol>
      <h2>Video Search Keywords</h2>
      <ol>
        {videoSearchKeywords.map((keyword: Keyword) => {
          return (
            <li>
              <a
                onClick={() => {
                  navigate(RoutePaths.videoSearch + '?q=' + keyword.value)
                }}
              >
                {keyword.value}
              </a>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
