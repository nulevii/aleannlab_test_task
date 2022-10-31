import React from 'react'

import './App.css'
import { useFetch } from './utilities/useFetch'
function App () {
  const { loading, data: products } = useFetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
  console.log(loading, products)
  return (
    <div className="text-3xl font-bold underline">hello</div>
  )
}

export default App
