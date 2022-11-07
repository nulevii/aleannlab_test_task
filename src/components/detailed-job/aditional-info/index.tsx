import { DataInterface } from '../../../utilities/dataInterface'
import styles from './style.module.css'
function AditionalInfo ({
  benefits,
  employmentType
}: {
  employmentType: DataInterface['employment_type']
  benefits: DataInterface['benefits']
}) {
  return (
    <section className={styles.benifitsSection}>
      <h2 className={styles.sectionHeading}>Additional info</h2>
      <hr className={styles.sectionLine} />
      <h3 className={styles.AditionalInfoListCaption}>Employment type</h3>
      <ul className={styles.employmenTypeList}>
        {employmentType.map((type) => (
          <li className={styles.employmentType} key={type}>
            {type}
          </li>
        ))}
      </ul>
      <h3 className={styles.AditionalInfoListCaption}>Benefits</h3>
      <ul className={styles.benifitsList }>
        {benefits.map((benifit) => (
          <li className={styles.benifit} key={benifit}>
            {benifit}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AditionalInfo
