import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoDisplay from '../components/VideoDisplay'
import useNasaAssets from '../hooks/useNasaAssets'
import ErrorComponent from '../components/ErrorComponent'
import Loader from '../components/Loader'
import ImageDisplay from '../components/ImageDisplay'

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
    <div className="container-sm mt-5 mb-5">
      {error && <ErrorComponent message={error} />}
      {loading ?? <Loader />}
      {mediaType == 'image' ?? (
        <ImageDisplay key={Date.now()} viewUrl={viewUrl} metadata={metadata} />
      )}
      {mediaType == 'video' ?? (
        <VideoDisplay key={Date.now()} viewUrl={viewUrl} metadata={metadata} />
      )}
    </div>
  )
}
