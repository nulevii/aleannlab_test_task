import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { DataInterface } from '../../../utilities/dataInterface'
import { splitDescription } from '../../../utilities/splitDescription'
import { generateKey } from '../../../utilities/keyGenerator'

import { useTraceWindowWidth } from '../../../utilities/useTraceWindowWidth'
import { convertSalary } from '../../../utilities/sallaryConverter'
import { ApplyButton } from './apply-button'
import styles from './style.module.css'
import sprite from '../../../assets/icons.svg'

dayjs.extend(relativeTime)

function GeneralInformation ({
  title,
  salary,
  createdAt,
  description
}: Pick<DataInterface, 'title' | 'salary' | 'createdAt' | 'description'>) {
  const {
    benefits: textBenefits,
    benefitsArr: textBenefitsArr,
    generalInfo,
    responsopilities,
    responsopilitiesText
  } = splitDescription(description)

  const windowWidth = useTraceWindowWidth()

  const createdTime = dayjs(createdAt).fromNow()
  const dateTime = dayjs(createdAt).format('DD/MM/YYYY')

  const convertedSalary = convertSalary(salary)
  return (
    <section className={styles.jobDetailsSection}>
      <div className={styles.blockWrapper}>
        <h2 className={styles.sectionHeading}>Job Details</h2>
        <hr className={styles.sectionLine} />
        <a
          className={`${styles.helperLink} ${styles.saveLink}`}
          href="#"
          onClick={() => false}
        >
          <svg className={styles.starIcon}>
            <use
              media="(max-width: 633px)"
              href={sprite + (windowWidth >= 768 ? '#bookmark' : '#star')}
            ></use>
          </svg>
          Save to my list
        </a>
        <a className={styles.helperLink} href="#" onClick={() => false}>
          <svg className={styles.shareIcon}>
            <use href={sprite + '#share'}></use>
          </svg>
          Share
        </a>
      </div>

      <ApplyButton styles={`mobileHidden ${styles.applyButton}`}></ApplyButton>

      <div className={styles.blockWrapper}>
        <p className={styles.description}>{title}</p>
        <time dateTime={dateTime} className={styles.createdDate}>
          Posted {createdTime}
        </time>
        <p className={styles.salary}>
          Brutto, per year
          <strong>{convertedSalary}</strong>
        </p>
      </div>
      <p className={styles.textBlock}>{generalInfo}</p>
      <h3 className={styles.textCaption}>{responsopilities}</h3>
      <p className={styles.textBlock}>{responsopilitiesText}</p>
      <h3 className={styles.textCaption}>{textBenefits}</h3>

      <h4 className={styles.benefitsCaption}>
        Our physicians enjoy a wide range of benefits, including:
      </h4>
      <ul className={styles.textBlock}>
        {textBenefitsArr.map((benefit) => (
          <li className={styles.benifit} key={generateKey()}>
            {benefit}
          </li>
        ))}
      </ul>
      <ApplyButton
        styles={`${styles.applyButtonMobile} ${styles.applyButton}`}
      ></ApplyButton>
    </section>
  )
}

export default GeneralInformation
