import { useParams, Navigate } from 'react-router-dom'

import { DataInterface } from '../../utilities/dataInterface'

import JobElement from './job-element'
import TabSelector from './tabSelector'

const PAGE_SIZE = 8

function JobList ({ jobs }: { jobs: DataInterface[] }) {
  const { id: pageId } = useParams()
  const NumberTypePageId = Number(pageId)
  const pagesQtt = Math.ceil(jobs.length / PAGE_SIZE)

  if (
    !Number.isInteger(NumberTypePageId) ||
    NumberTypePageId <= 0 ||
    NumberTypePageId > pagesQtt
  ) {
    return <Navigate to="/job_list/1" />
  }
  const jobsListPart = jobs.slice(
    NumberTypePageId * PAGE_SIZE - PAGE_SIZE,
    NumberTypePageId * PAGE_SIZE
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
          NumberTypePageId={NumberTypePageId}
        ></TabSelector>
      </section>
    </>
  )
}

export default JobList
