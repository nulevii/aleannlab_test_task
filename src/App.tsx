import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useFetch } from './utilities/useFetch'

import { API_LINK } from './utilities/constants'

import Loader from './components/loader/loader'
import JobList from './components/job-list'
import DetailedJob from './components/detailed-job'

function App () {
  const { loading, data: jobs } = useFetch(API_LINK)

  if (loading) {
    return <Loader/>
  }

  return (
        <Routes>
          <Route path="/job_list">
            <Route index element={<JobList jobs={jobs} />}></Route>
            <Route path=":id" element={<DetailedJob jobs={jobs} />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/job_list" />}></Route>
        </Routes>
  )
}

export default App
