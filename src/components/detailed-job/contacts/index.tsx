import LocationMap from './map'

import { DataInterface } from '../../../utilities/dataInterface'
import { convertPhone } from '../../../utilities/convertPhone'
import styles from './style.module.css'
import sprite from '../../../assets/icons.svg'

function Contacts ({
  address,
  phone,
  email,
  location,
  name
}: Pick<DataInterface, 'address' | 'phone' | 'email' | 'location' | 'name'>) {
  const convertedPhone = convertPhone(phone)
  return (
    <section className={styles.contactsSection}>
      <h2 className={styles.sectionHeading}>Contacts</h2>
      <hr className={styles.sectionLine} />
      <article className={styles.addresWrapper}>
        <address className={styles.address}>
          <h3 className={styles.descriptionName}>
            Department name.
            <br />
            {name}
          </h3>

          <p className={styles.location}>
            <svg className={styles.locationIcon}>
              <use href={sprite + '#location'}></use>
            </svg>
            {address}
          </p>
          <a className={styles.phone} href={`tel:${phone}`}>
            {convertedPhone}
          </a>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </address>
        <LocationMap
          styles={styles}
          location={{ lat: location.lat, long: location.long }}
        ></LocationMap>
      </article>
    </section>
  )
}

export default Contacts
