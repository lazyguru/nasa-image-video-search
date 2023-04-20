import { Item } from '../types/response'
import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Search from '../components/Search'
import { Result } from '../components/SearchResults'

export default function SearchPage() {
  const { videoSearchKeywords, setVideoSearchKeywords } = useContext(AppContext)
  const videoFilter = (data: Item[]) => {
    const items: Result[] = []
    data.forEach((item) => {
      if (item.links != undefined) {
        item.links?.map((link, idx) => {
          if (link.render == 'image' && item.data[idx].media_type == 'video') {
            items.push({
              title: item.data[idx].title,
              imgsrc: link.href,
              photographer: item.data[idx].photographer,
              description: item.data[idx].description,
            } as Result)
          }
        })
      }
    })
    return items
  }

  return (
    <div className="container">
      <h1>NASA Video Search</h1>
      <Search
        filter={videoFilter}
        keywordHistory={videoSearchKeywords}
        setKeywordHistory={setVideoSearchKeywords}
      />
    </div>
  )
}