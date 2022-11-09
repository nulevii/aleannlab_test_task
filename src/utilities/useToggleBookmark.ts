import { useState, createContext, useContext } from 'react'

export function useToggleBookmark () {
  const [bookMarks, setBookMarks] = useState([''])
  const toggleBookmark = (id: string) => {
    if (bookMarks.includes(id)) {
      const newBookmarks = bookMarks.filter((bookMarkId: string) => bookMarkId !== id)
      setBookMarks(newBookmarks)
      return
    }
    setBookMarks([...bookMarks, id])
  }
  return { bookMarks, toggleBookmark }
}

export const BookmarksContext = createContext<{
  bookMarks: string[]
  toggleBookmark: (id: string) => void
} | undefined>(undefined)

export const useBookmarksContext = () => {
  if (BookmarksContext === undefined) {
    throw new Error('context should be used within FavJobsContext.Provider')
  }
  const favJobsContext = useContext(BookmarksContext)
  return favJobsContext as {
    bookMarks: string[]
    toggleBookmark: (id: string) => void
  }
}
