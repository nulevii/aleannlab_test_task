import { useNavigate } from 'react-router-dom'

import { generateArray } from '../../../utilities/arrayGenerator'
import { generateKey } from '../../../utilities/keyGenerator'
import sprite from '../../../assets/icons.svg'
import styles from './style.module.css'

function TabSelector ({
  pageQtt,
  pageNumberNType
}: {
  pageQtt: number
  pageNumberNType: number
}) {
  const navigate = useNavigate()
  const pageQttArray = generateArray(pageQtt, false)

  const navigateLeft = () => {
    if (pageNumberNType <= 1) {
      return
    }
    navigate(`/aleannlab_test_task/job_list/${pageNumberNType - 1}`)
  }
  const navigateRight = () => {
    if (pageNumberNType >= pageQtt) {
      return
    }
    navigate(`/aleannlab_test_task/job_list/${pageNumberNType + 1}`)
  }

  return (
    <figure className={styles.tabSelectorWrapper}>
      <button
        className={`${styles.leftButton} mobileHidden`}
        onClick={navigateLeft}
      >
        <svg className={styles.arrowLeft}>
          <use href={sprite + '#arrow-left'}></use>
        </svg>
      </button>
      <div className={styles.numberButtonWrapper}>
        {pageQttArray.map((index) => (
          <button
            key={generateKey()}
            className={`${styles.numberButton} ${
              index === pageNumberNType ? `${styles.active}` : ''
            }`}
            onClick={() => {
              navigate(`/aleannlab_test_task/job_list/${index}`)
            }}
          >
            {' '}
            {index}{' '}
          </button>
        ))}
      </div>
      <button
        className={`${styles.rightButton} mobileHidden`}
        onClick={navigateRight}
      >
        <svg className={styles.arrowRight}>
          <use href={sprite + '#arrow-right'}></use>
        </svg>
      </button>
    </figure>
  )
}

export default TabSelector
