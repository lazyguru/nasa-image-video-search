import { Item } from '../types/response'
import { Result } from '../components/SearchResults'
import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Search from '../components/Search'

export default function ImageSearchPage() {
  const { imageSearchKeywords, setImageSearchKeywords } = useContext(AppContext)
  const imageFilter = (data: Item[]) => {
    const items: Result[] = []
    data.forEach((item) => {
      if (item.links != undefined) {
        item.links?.map((link, idx) => {
          if (link.render == 'image' && item.data[idx].media_type == 'image') {
            items.push({
              title: item.data[idx].title,
              imgsrc: encodeURI(link.href),
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
    <div className="container grid place-items-stretch mt-5">
      <div className="font-bold text-xl mb-2 text-white place-self-center">
        NASA Image Search
      </div>
      <Search
        filter={imageFilter}
        keywordHistory={imageSearchKeywords}
        setKeywordHistory={setImageSearchKeywords}
      />
    </div>
  )
}
