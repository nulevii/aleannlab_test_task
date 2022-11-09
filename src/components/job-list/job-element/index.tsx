import { useMemo } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { DataInterface } from '../../../utilities/dataInterface'
import { generateKey } from '../../../utilities/keyGenerator'
import { useBookmarksContext } from '../../../utilities/useToggleBookmark'
import sprite from '../../../assets/icons.svg'
import styles from './style.module.css'

import TextInfo from './text-info'

dayjs.extend(relativeTime)

function JobElement ({ job }: { job: DataInterface }) {
  const { title, pictures, createdAt, address, name, id, rating } = job
  const image = pictures[0]
  const createdTime = dayjs(createdAt).fromNow()
  const dateTime = dayjs(createdAt).format('DD/MM/YYYY')

  const { bookMarks, toggleBookmark } = useBookmarksContext()
  const isJobFavorite = useMemo(() => {
    if (bookMarks.find((jobId: string) => id === jobId)) {
      return true
    }
    return false
  }, [bookMarks])

  return (
    <li className={styles.card}>
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
            <button
              onClick={() => { toggleBookmark(id) }}
            >
              <svg className={`${styles.bookmark} ${isJobFavorite ? styles.favoriteBookmark : ''}`}>
                <use href={sprite + '#bookmark'}></use>
              </svg>
            </button>
            <time dateTime={dateTime} className={styles.createdDate}>
              Posted {createdTime}
            </time>
          </div>
        </div>
        <TextInfo
          address={address}
          name={name}
          id={id}
          title={title}
        ></TextInfo>
      </div>
    </li>
  )
}

export default JobElement
