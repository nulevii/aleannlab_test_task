import { useState, useEffect, useCallback } from 'react'

import { DataInterface } from './dataInterface'
import { localCopy } from './localCopy'

export const useFetch = (url: string): { loading: boolean, data: DataInterface[] } => {
  const [loading, setLoading] = useState(true)
  const [data, setProducts] = useState<DataInterface[]>([])

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url)
      const data = (await response.json())
      if (!Array.isArray(data)) throw Error(data?.error || 'unknown error')
      setProducts(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setProducts(localCopy)
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
