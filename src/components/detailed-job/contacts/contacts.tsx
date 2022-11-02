import { DataInterface } from '../../../utilities/useFetch'
function Contacts ({
  address,
  phone,
  email,
  location,
  name
}: Pick<DataInterface, 'address' | 'phone' | 'email' | 'location' | 'name'>) {
  return (
    <section>
      <h3>Contacts</h3>
      <div>
        <address>
          <p>Department name.</p>
          <h4>{name}</h4>
          <p>icon {address}</p>
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </address>
        {location.lat}
        {location.long}
      </div>
    </section>
  )
}

export default Contacts
