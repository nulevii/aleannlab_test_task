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
  createdAt: Date | string
  updatedAt: Date | string
  description: string
  employment_type: string[]
  rating: string[]
}

interface Location {
  lat: number
  long: number
}
