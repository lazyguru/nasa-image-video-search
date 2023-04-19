import { Item } from '../types/response'
interface SearchResultsProps {
  data: Item[]
}

interface Result {
  title: string
  imgsrc: string
  photographer: string
  description: string
}

export default function SearchResults({ data }: SearchResultsProps) {
  const items: Result[] = []
  data.forEach((item) => {
    if (item.links != undefined) {
      item.links?.map((link, idx) => {
        if (link.render == 'image' && item.data[idx].media_type == 'image') {
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
