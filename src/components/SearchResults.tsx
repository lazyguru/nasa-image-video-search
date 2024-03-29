import { useNavigate } from 'react-router-dom'
import { Item } from '../types/SearchResponse'
import RoutePaths from '../types/RoutePaths'
interface SearchResultsProps {
  data: Item[]
  filterBy: string
}

export interface Result {
  id: string
  title: string
  imgsrc: string
  photographer: string
  description: string
}

const filter = (filterBy: string, data: Item[]) => {
  const items: Result[] = []
  data.forEach((item) => {
    if (item.links != undefined) {
      item.links?.map((link, idx) => {
        if (link.render == 'image' && item.data[idx].media_type == filterBy) {
          items.push({
            id: item.data[idx].nasa_id,
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

export default function SearchResults({ data, filterBy }: SearchResultsProps) {
  const items = filter(filterBy, data)
  const navigate = useNavigate()
  return (
    <>
      {items.map((item) => (
        <div className="w-full lg:max-w-full lg:flex place-self-center">
          <div
            className="h-96 w-full lg:h-48 lg:w-1/4 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-auto"
            style={{ backgroundImage: `url(${item.imgsrc})` }}
            onClick={() =>
              navigate(RoutePaths.view + '?t=' + filterBy + '&i=' + item.id)
            }
          ></div>
          <div className="border-r border-b border-l border-gray-400 lg:grow lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
