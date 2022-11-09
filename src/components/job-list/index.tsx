import { useParams, Navigate } from 'react-router-dom'

import { DataInterface } from '../../utilities/dataInterface'

import JobElement from './job-element'
import TabSelector from './tabSelector'

const PAGE_SIZE = 8

function JobList ({ jobs }: { jobs: DataInterface[] }) {
  const { pageNumber } = useParams()
  const pageNumberNType = Number(pageNumber)
  const pagesQtt = Math.ceil(jobs.length / PAGE_SIZE)

  if (
    !Number.isInteger(pageNumberNType) ||
    pageNumberNType <= 0 ||
    pageNumberNType > pagesQtt
  ) {
    return <Navigate to="/aleannlab_test_task/job_list/1" />
  }
  const jobsListPart = jobs.slice(
    pageNumberNType * PAGE_SIZE - PAGE_SIZE,
    pageNumberNType * PAGE_SIZE
  )
  return (
    <>
      <section className="bg-customBlue-200  p-2 font-roboto flex flex-col min-h-screen">
        <ul className="space-y-2">
          {jobsListPart.map((job) => {
            return <JobElement key={job.id} job={job}></JobElement>
          })}
        </ul>
        <TabSelector
          pageQtt={pagesQtt}
          pageNumberNType={pageNumberNType}
        ></TabSelector>
      </section>
    </>
  )
}

export default JobList
