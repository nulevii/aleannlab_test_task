import { useState, useEffect, useCallback } from 'react'

import { DataInterface } from './dataInterface'
import { localCopy } from './localeCopy'
import { generateStars } from './starsGenerator'

export const useFetch = (url: string): { loading: boolean, data: DataInterface[] } => {
  const [loading, setLoading] = useState(true)
  const [data, setProducts] = useState<DataInterface[]>([])

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = (await response.json())
      if (!Array.isArray(data)) throw Error(data?.error || 'unknown error')
      const dataWithRating = data.map((element) => ({ ...element, rating: generateStars(5) }))
      setProducts(dataWithRating)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setProducts(
        localCopy.map((element) => ({ ...element, rating: generateStars(5) }))
      )
    }
  }, [url])

  useEffect(() => {
    getProducts()
      .catch((error) => {
        setLoading(true)
        console.log(error)
      })
  }, [url, getProducts])
  return { loading, data }
}
