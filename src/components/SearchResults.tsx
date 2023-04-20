import { Item } from '../types/response'
interface SearchResultsProps {
  data: Item[]
  filter(data: Item[]): Result[]
}

export interface Result {
  title: string
  imgsrc: string
  photographer: string
  description: string
}

export default function SearchResults({ data, filter }: SearchResultsProps) {
  const items = filter(data)
  return (
    <>
      {items.map((item) => (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{ backgroundImage: `url(${item.imgsrc})` }}
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
