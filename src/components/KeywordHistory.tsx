import { Link } from 'react-router-dom'
import { Keyword } from '../types/AppContext'

interface KeywordHistoryProps {
  title: string
  searchKeywords: Keyword[]
  urlPath: string
}
export default function KeywordHistory({
  title,
  searchKeywords,
  urlPath,
}: KeywordHistoryProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-400 place-self-center text-center min-h-full w-100">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {searchKeywords.map((keyword: Keyword) => {
          return (
            <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              <Link to={urlPath + '?q=' + keyword.value}>{keyword.value}</Link>
            </span>
          )
        })}
      </div>
    </div>
  )
}
