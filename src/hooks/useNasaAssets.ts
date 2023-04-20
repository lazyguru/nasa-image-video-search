import { useEffect, useState } from 'react'
import { Metadata, MetadataURLResponse } from '../types/MetadataResponse'
import { Asset } from '../types/AssetResponse'

export interface Meta {
    title: string
    description: string
    keywords: string[]
}

export default function useNasaAssets() {
  const [mediaType, setMediaType] = useState('')
  const [nasaId, setNasaId] = useState('')
  const [viewUrl, setViewUrl] = useState('')
  const [metadata, setMetadata] = useState<Meta>({title:'', description:'',keywords:[]})
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
        const metadataUrlResponse = await fetch(
          'https://images-api.nasa.gov/metadata/' + nasaId
        )
        if (metadataUrlResponse.ok) {
          const jsonURL: MetadataURLResponse = await metadataUrlResponse.json()
          const metadataResponse = await fetch(
            jsonURL.location
          )
          if (metadataResponse.ok) {
            const jsonData: Metadata = await metadataResponse.json()
            const meta: Meta = {
              title: jsonData['XMP:Title'] || '',
              description: jsonData['AVAIL:Description'] || '',
              keywords: jsonData['AVAIL:Keywords'] || [],
            }
            setMetadata(meta)
          } else {
            setError('Error getting search results from NASA')
          }
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
  }, [nasaId, mediaType])
  return {
    loading,
    error,
    viewUrl,
    metadata,
    setNasaId,
    mediaType,
    setMediaType
}
}