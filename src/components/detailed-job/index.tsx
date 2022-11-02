import { useParams, Navigate } from 'react-router-dom'
import { DataInterface } from '../../utilities/useFetch'

import GeneralInformation from './general-information'
import AditionalInfo from './aditional-info'
import AttachedImages from './attached-images'
import Contacts from './contacts/contacts'

function DetailedJob ({ jobs }: { jobs: DataInterface[] }) {
  const { id: pageId } = useParams()

  const jobObj = jobs.find(({ id }) => id === pageId)
  if (!jobObj) {
    return <Navigate to="/job_list" />
  }

  const {
    title,
    pictures: images,
    createdAt,
    address,
    phone,
    email,
    location,
    description,
    salary,
    benefits,
    employment_type: employmentType,
    name
  } = jobObj
  console.log(jobObj)

  return (
    <>
      <GeneralInformation
        title={title}
        createdAt={createdAt}
        description={description}
        salary={salary}
      ></GeneralInformation>

      <AditionalInfo
        employmentType={employmentType}
        benefits={benefits}
      ></AditionalInfo>

      <AttachedImages images={images} name={name}></AttachedImages>

      <button>icon RETURN TO JOB BOARD</button>

      <Contacts
        address={address}
        phone={phone}
        email={email}
        location={location}
        name={name}
      ></Contacts>
    </>
  )
}

export default DetailedJob
