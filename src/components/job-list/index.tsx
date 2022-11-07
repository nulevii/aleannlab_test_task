import { useParams } from 'react-router-dom'

import { DataInterface } from '../../utilities/dataInterface'

import JobElement from './job-element'
import TabSelector from './tabSelector'

const PAGE_SIZE = 8

function JobList ({ jobs }: { jobs: DataInterface[] }) {
  console.log(jobs)
  const { id: pageId } = useParams()
  const NumberTypeId = Number(pageId)
  const pagesQtt = Math.ceil(jobs.length / PAGE_SIZE)
  const jobsListPart = jobs.slice(
    NumberTypeId * PAGE_SIZE - PAGE_SIZE,
    NumberTypeId * PAGE_SIZE
  )
  console.log(jobsListPart)
  return (
    <>
      <section className="bg-customBlue-200  p-2 font-roboto flex flex-col min-h-screen">
        <ul className="space-y-2">
          {jobsListPart.map((job) => {
            return <JobElement key={job.id} job={job}></JobElement>
          })}
        </ul>
        <TabSelector pageQtt={pagesQtt}></TabSelector>
      </section>
    </>
  )
}

export default JobList
