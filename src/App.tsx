import * as React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useFetch } from './utilities/useFetch'

import { API_LINK } from './utilities/constants'
import ScrollToTop from './scrollToTop'

import Loader from './components/loader/loader'
import JobList from './components/job-list'
const DetailedJob = React.lazy(async () => await import('./components/detailed-job'))

function App () {
  const { loading, data: jobs } = useFetch(API_LINK)
  if (loading) {
    return <Loader />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/job_list">
          <Route path="" element={<Navigate to="/job_list/1" />}></Route>
          <Route path=":id" element={<JobList jobs={jobs} />}></Route>
        </Route>
        <Route
          path="/job/:id"
          element={
            <React.Suspense fallback={<><Loader/></>}>
              <DetailedJob jobs={jobs} />
            </React.Suspense>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/job_list/1" />}></Route>
      </Routes>
    </>
  )
}

export default App
