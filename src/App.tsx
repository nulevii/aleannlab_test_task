import React, { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useFetch } from './utilities/useFetch'
import { useToggleBookmark, BookmarksContext } from './utilities/useToggleBookmark'

import { API_LINK } from './utilities/constants'
import ScrollToTop from './scrollToTop'
import { generateArray } from './utilities/arrayGenerator'

import Loader from './components/loader'
import JobList from './components/job-list'
const DetailedJob = React.lazy(async () => await import('./components/detailed-job'))

function App () {
  const { loading, data: jobs } = useFetch(API_LINK)
  const jobsWithRating = useMemo(() => jobs.map((element) => ({ ...element, rating: generateArray(5, true) })), [jobs])
  const { bookMarks, toggleBookmark } = useToggleBookmark()
  if (loading) {
    return <Loader />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/aleannlab_test_task/job_list/1" />}
        />
        <Route
          path="/aleannlab_test_task"
          element={<Navigate to="/aleannlab_test_task/job_list/1" />}
        />
        <Route
          path="/aleannlab_test_task/job_list"
          element={<Navigate to="/aleannlab_test_task/job_list/1" />}
        />

        <Route
          path="/aleannlab_test_task/job_list/:pageNumber"
          element={
            <BookmarksContext.Provider value={{ bookMarks, toggleBookmark }}>
              <JobList jobs={jobsWithRating} />
            </BookmarksContext.Provider>
          }
        />

        <Route
          path="/aleannlab_test_task/job/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <BookmarksContext.Provider value={{ bookMarks, toggleBookmark }}>
                <DetailedJob jobs={jobsWithRating} />
              </BookmarksContext.Provider>
            </React.Suspense>
          }
        />
      </Routes>
    </>
  )
}

export default App
