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
        <article>
          <h2>{item.title}</h2>
          <img src={item.imgsrc} />
          {item.photographer && <p>Photograph by: {item.photographer}</p>}
          <p>{item.description}</p>
        </article>
      ))}
    </>
  )
}
