import { Meta } from '../hooks/useNasaAssets'
import Keywords from './Keywords'

interface VideoDisplayProps {
  metadata: Meta
  viewUrl: string
}

export default function VideoDisplay({ metadata, viewUrl }: VideoDisplayProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500">
      <video src={viewUrl} controls={true} height={1080} width={1920} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{metadata.title}</div>
        <p>{metadata.description}</p>
      </div>
      <Keywords keywords={metadata.keywords} />
    </div>
  )
}
