import { DataInterface } from '../../utilities/dataInterface'

import JobElement from './job-element'

function JobList ({ jobs }: { jobs: DataInterface[] }) {
  return (
    <section className="bg-customBlue-200 space-y-2 p-2 font-roboto">
      {jobs.map((job) => {
        return <JobElement key={job.id} job={job}></JobElement>
      })}
    </section>
  )
}

export default JobList
