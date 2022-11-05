
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { DataInterface } from '../../../utilities/dataInterface'
import { generateKey } from '../../../utilities/keyGenerator'
import sprite from '../../../assets/icons.svg'
import styles from './style.module.css'

import TextInfo from './text-info'

dayjs.extend(relativeTime)

function JobElement ({ job }: { job: DataInterface }) {
  const { title, pictures, createdAt, address, name, id, rating } = job
  const image = pictures[0]
  const createdTime = dayjs(createdAt).fromNow()
  const dateTime = dayjs(createdAt).format('DD/MM/YYYY')

  return (
    <article className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />

      <div className={styles.generalInfo}>
        <div className={styles.ratingAndPostDate}>
          <div className={styles.stars}>
            {rating.map((star) => (
              <svg className={styles.star} key={generateKey()}>
                <use href={sprite + '#star'}></use>
              </svg>
            ))}
          </div>

          <div className={styles.bookmarkAndPostDate}>
            <svg className={styles.bookmark}>
              <use href={sprite + '#bookmark'}></use>
            </svg>
            <time dateTime={dateTime} className={styles.createdDate} >
              Posted {createdTime}
            </time>
          </div>
        </div>
        <TextInfo address={address} name={name} id={id} title={title} ></TextInfo>
      </div>
    </article>
  )
}

export default JobElement
