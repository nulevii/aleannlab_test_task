import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { DataInterface } from '../../utilities/dataInterface'

import GeneralInformation from './general-information'
import AditionalInfo from './aditional-info'
import AttachedImages from './attached-images'
import Contacts from './contacts'
import styles from './style.module.css'
import sprite from '../../assets/icons.svg'

function DetailedJob ({ jobs }: { jobs: DataInterface[] }) {
  const navigate = useNavigate()
  const { id: pageId } = useParams()

  const jobObj = jobs.find(({ id }) => id === pageId)
  if (!jobObj) {
    return <Navigate to="/job_list/1" />
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
        <div className={styles.sectionsWrapper}>
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
        </div>
        <Contacts
          address={address}
          phone={phone}
          email={email}
          location={location}
          name={name}
        ></Contacts>
      </main>
      <footer className={`mobileHidden ${styles.jobDetailsFooter}`}>
        <button
          onClick={() => navigate('/job_list')}
          className={styles.returnButton}
        >
          <svg className={styles.arrowIcon}>
            <use
              media="(max-width: 633px)"
              href={sprite + '#arrow-left-detailed-job'}
            ></use>
          </svg>
          RETURN TO JOB BOARD
        </button>
      </footer>
    </>
  )
}

export default DetailedJob
