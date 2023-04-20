import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoDisplay from '../components/VideoDisplay'
import useNasaAssets from '../hooks/useNasaAssets'
import ErrorComponent from '../components/ErrorComponent'
import Loader from '../components/Loader'
import ImageDisplay from '../components/ImageDisplay'
import { MediaType } from '../types/SearchResponse'

export default function ViewPage() {
  const [searchParams] = useSearchParams()
  const {
    loading,
    error,
    viewUrl,
    metadata,
    setNasaId,
    mediaType,
    setMediaType,
  } = useNasaAssets()
  useEffect(() => {
    if (!searchParams.has('t') || !searchParams.has('i')) {
      return
    }
    setMediaType(searchParams.get('t') as string)
    setNasaId(searchParams.get('i') as string)
  }, [searchParams])
  return (
    <div className="grid place-items-stretch mt-5 mb-5">
      <div className="w-full max-w-2xl place-self-center">
        <ErrorComponent message={error} />
        <Loader show={loading} />
        {mediaType == MediaType.Image && (
          <ImageDisplay viewUrl={viewUrl} metadata={metadata} />
        )}
        {mediaType == MediaType.Video && (
          <VideoDisplay viewUrl={viewUrl} metadata={metadata} />
        )}
      </div>
    </div>
  )
}
