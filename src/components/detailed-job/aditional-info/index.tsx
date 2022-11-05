import { DataInterface } from '../../../utilities/dataInterface'

function AditionalInfo ({
  benefits,
  employmentType
}: {
  employmentType: DataInterface['employment_type']
  benefits: DataInterface['benefits']
}) {
  return (
    <section>
      <h2>Additional info</h2>
      <p>Employment type</p>
      <ul>
        {employmentType.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
      <p>Benefits</p>
      <ul>
        {benefits.map((benifit) => (
          <li key={benifit}>{benifit}</li>
        ))}
      </ul>
    </section>
  )
}

export default AditionalInfo
