import { useEffect, useState } from 'react'
import { Metadata } from '../types/MetadataResponse'
import { Asset } from '../types/AssetResponse'

export default function useNasaAssets() {
  const [nasaId, setNasaId] = useState('')
  const [viewUrl, setViewUrl] = useState('')
  const [metadata, setMetadata] = useState<Metadata[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    async function getNasaMedia() {
      if (nasaId.length == 0) {
        return
      }
      try {
        const assetRespose = await fetch(
          'https://images-api.nasa.gov/asset/' + nasaId
        )
        if (assetRespose.ok) {
          const jsonData: Asset = await assetRespose.json()
          setViewUrl(encodeURI(jsonData.collection.items[2].href))
        } else {
          setError('Error getting search results from NASA')
        }
        const metadataResponse = await fetch(
          'https://images-api.nasa.gov/asset/' + nasaId
        )
        if (metadataResponse.ok) {
          const jsonData: Metadata = await metadataResponse.json()
          setMetadata([jsonData])
        } else {
          setError('Error getting search results from NASA')
        }
      } catch (e) {
        const error = e as Error
        setError('Error connecting to NASA: ' + error.message)
      }
      setLoading(false)
    }
    getNasaMedia()
  }, [nasaId])
  return {
    loading,
    error,
    viewUrl,
    metadata,
    setNasaId
}
}