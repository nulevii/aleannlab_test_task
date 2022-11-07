import { Link } from 'react-router-dom'

import { generateArray } from '../../../utilities/arrayGenerator'
import { generateKey } from '../../../utilities/keyGenerator'
import sprite from '../../../assets/icons.svg'
import styles from './style.module.css'

function TabSelector ({ pageQtt }: { pageQtt: number }) {
  const pageQttArray = generateArray(pageQtt, false)

  return (
    <figure className={styles.tabSelectorWrapper}>
      <button className={styles.leftButton}>
        <svg className={styles.arrowLeft}>
          <use href={sprite + '#arrow-left'}></use>
        </svg>
      </button>
      <div className={styles.numberButtonWrapper}>
        {pageQttArray.map((index) => (
          <button key={generateKey()} className={styles.numberButton}>
            <Link to={`/job_list/${index}`}>{index}</Link>
          </button>
        ))}
      </div>
      <button className={styles.rightButton}>
        <svg className={styles.arrowRight}>
          <use href={sprite + '#arrow-right'}></use>
        </svg>
      </button>
    </figure>
  )
}

export default TabSelector
