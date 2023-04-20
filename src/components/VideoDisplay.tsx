import { Metadata } from '../types/MetadataResponse'

interface VideoDisplayProps {
  metadata: Metadata
  viewUrl: string
}

export default function VideoDisplay({ metadata, viewUrl }: VideoDisplayProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <video src={viewUrl} controls={true} height={1080} width={1920} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{metadata['XMP:Title']}</div>
        <p>{metadata['AVAIL:Description']}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {metadata['AVAIL:Keywords'].map((keyword) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{keyword}
          </span>
        ))}
      </div>
    </div>
  )
}
