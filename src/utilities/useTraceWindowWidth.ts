import { useState, useLayoutEffect } from 'react'

export const useTraceWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0)
  useLayoutEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return windowWidth
}
