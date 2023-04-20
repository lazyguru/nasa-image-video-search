import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoDisplay from '../components/VideoDisplay'
import useNasaAssets from '../hooks/useNasaAssets'
import ErrorComponent from '../components/ErrorComponent'
import Loader from '../components/Loader'

export default function ViewPage() {
  const [searchParams] = useSearchParams()
  const [mediaType, setMediaType] = useState('')
  const { loading, error, viewUrl, metadata, setNasaId } = useNasaAssets()
  useEffect(() => {
    if (!searchParams.has('t') || !searchParams.has('i')) {
      return
    }
    setMediaType(searchParams.get('t') as string)
    setNasaId(searchParams.get('i') as string)
  })
  return (
    <div className="container-sm mt-5 mb-5">
      <ErrorComponent message={error} />
      {loading ? (
        <Loader />
      ) : (
        error.length == 0 &&
        metadata.map((meta) =>
          mediaType == 'image' ? (
            <img key={Date.now()} src={viewUrl} />
          ) : (
            mediaType == 'video' ?? (
              <VideoDisplay
                key={Date.now()}
                viewUrl={viewUrl}
                metadata={meta}
              />
            )
          )
        )
      )}
    </div>
  )
}
