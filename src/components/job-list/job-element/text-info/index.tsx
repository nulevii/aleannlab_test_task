import { Link } from 'react-router-dom'

import { DataInterface } from '../../../../utilities/dataInterface'
import { generateKey } from '../../../../utilities/keyGenerator'
import sprite from '../../../../assets/icons.svg'
import styles from './style.module.css'

function TextInfo ({
  address,
  name, id, title
}: Pick<DataInterface, 'address' | 'name' | 'id' | 'title'>) {
  return (
    <div>
      <h3 className={styles.description}>
        <Link to={`/job_list/${id}`}>{title}</Link>
      </h3>
      <p className={styles.departmentNameAndLocation}>
        Department name • {name}
      </p>
      <address className={styles.address}>
        <svg key={generateKey()} className={styles.locationIcon}>
          <use href={sprite + '#location'}></use>
        </svg>
        <p className={styles.departmentNameAndLocation}>{address}</p>
      </address>
    </div>
  )
}

export default TextInfo
