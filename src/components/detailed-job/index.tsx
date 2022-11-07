import { useParams, Navigate } from 'react-router-dom'
import { DataInterface } from '../../utilities/dataInterface'

import GeneralInformation from './general-information'
import AditionalInfo from './aditional-info'
import AttachedImages from './attached-images'
import Contacts from './contacts'
import styles from './style.module.css'

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

  return (
    <>
      <main className={styles.jobDetailsMain}>
        <GeneralInformation
          title={title}
          createdAt={createdAt}
          description={description}
          salary={salary}
        ></GeneralInformation>

        <AttachedImages images={images} name={name}></AttachedImages>

        <AditionalInfo
          employmentType={employmentType}
          benefits={benefits}
        ></AditionalInfo>
        <Contacts
          address={address}
          phone={phone}
          email={email}
          location={location}
          name={name}
        ></Contacts>
      </main>
      <footer className="mobileHidden">
        <button>icon RETURN TO JOB BOARD</button>
      </footer>
    </>
  )
}

export default DetailedJob
