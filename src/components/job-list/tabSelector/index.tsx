import { useNavigate } from 'react-router-dom'

import { generateArray } from '../../../utilities/arrayGenerator'
import { generateKey } from '../../../utilities/keyGenerator'
import sprite from '../../../assets/icons.svg'
import styles from './style.module.css'

function TabSelector ({
  pageQtt,
  NumberTypePageId
}: {
  pageQtt: number
  NumberTypePageId: number
}) {
  const navigate = useNavigate()
  const pageQttArray = generateArray(pageQtt, false)

  const navigateLeft = () => {
    if (NumberTypePageId <= 1) {
      return
    }
    navigate(`/job_list/${NumberTypePageId - 1}`)
  }
  const navigateRight = () => {
    if (NumberTypePageId >= pageQtt) {
      return
    }
    navigate(`/job_list/${NumberTypePageId + 1}`)
  }

  return (
    <figure className={styles.tabSelectorWrapper}>
      <button className={styles.leftButton} onClick={navigateLeft}>
        <svg className={styles.arrowLeft}>
          <use href={sprite + '#arrow-left'}></use>
        </svg>
      </button>
      <div className={styles.numberButtonWrapper}>
        {pageQttArray.map((index) => (
          <button
            key={generateKey()}
            className={`${styles.numberButton} ${index === NumberTypePageId ? `${styles.active}` : ''}`}
            onClick={() => {
              navigate(`/job_list/${index}`)
            }
            }
          >
            {' '}
            {index}{' '}
          </button>
        )
        )}
      </div>
      <button className={styles.rightButton} onClick={navigateRight}>
        <svg className={styles.arrowRight}>
          <use href={sprite + '#arrow-right'}></use>
        </svg>
      </button>
    </figure>
  )
}

export default TabSelector
