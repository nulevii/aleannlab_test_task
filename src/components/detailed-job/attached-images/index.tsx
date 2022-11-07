import { DataInterface } from '../../../utilities/dataInterface'
import { generateKey } from '../../../utilities/keyGenerator'

import styles from './style.module.css'

function AttachedImages ({
  images,
  name
}: {
  images: DataInterface['pictures']
  name: DataInterface['name']
}) {
  return (
    <section className={styles.imagesSection}>
      <h3 className={styles.sectionHeading}>Attached images</h3>
      <hr className={styles.sectionLine} />
      <ul className={styles.companyImagesList}>
        {images.map((image) => (
          <img className={styles.companyImage} key={generateKey()} src={image} alt="company"></img>
        ))}
      </ul>
    </section>
  )
}

export default AttachedImages
