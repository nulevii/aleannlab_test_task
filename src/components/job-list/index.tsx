import { DataInterface } from '../../utilities/useFetch'

import JobElement from './job-element'

function JobList ({ jobs }: { jobs: DataInterface[] }) {
  return (
    <section>
      {jobs.map((job) => {
        return <JobElement key={job.id} jobObj={job}></JobElement>
      })}
    </section>
  )
}

export default JobList
