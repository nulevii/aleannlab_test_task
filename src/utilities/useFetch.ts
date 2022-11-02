import { useState, useEffect, useCallback } from 'react'

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
export interface DataInterface {
  id: string
  name: string
  email: string
  phone: string
  title: string
  salary: string
  address: string
  benefits: string[]
  location: Location
  pictures: string[]
  createdAt: Date
  updatedAt: Date
  description: string
  employment_type: string[]
}

interface Location {
  lat: number
  long: number
}
