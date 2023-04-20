import { Meta } from '../hooks/useNasaAssets'
import Keywords from './Keywords'

interface ImageDisplayProps {
  metadata: Meta
  viewUrl: string
}

export default function ImageDisplay({ metadata, viewUrl }: ImageDisplayProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={viewUrl} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{metadata.title}</div>
        <p>{metadata.description}</p>
      </div>
      <Keywords keywords={metadata.keywords} />
    </div>
  )
}
