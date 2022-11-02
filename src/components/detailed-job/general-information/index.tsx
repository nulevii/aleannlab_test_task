import { DataInterface } from '../../../utilities/useFetch'
import { splitDescription } from '../../../utilities/splitDescription'
import { generateKey } from '../../../utilities/keyGenerator'

function GeneralInformation ({
  title,
  salary,
  createdAt,
  description
}: Pick<
DataInterface,
'title' | 'salary' | 'createdAt' | 'description'
>) {
  const {
    benefits: textBenefits,
    benefitsArr: textBenefitsArr,
    generalInfo,
    responsopilities,
    responsopilitiesText
  } = splitDescription(description)
  return (
    <section>
      <div>
        <h2>Job Details</h2>
        icon
        <a href="">Save to my list</a>
        icon
        <a href="">Share</a>
      </div>
      <button>Apply now</button>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <p>{salary}</p>
        <p>Brutto, per year</p>
      </div>
      <p>Posted {createdAt.toString()}</p>
      <p>{generalInfo}</p>
      <h3>{responsopilities}</h3>
      <p>{responsopilitiesText}</p>
      <h3>{textBenefits}</h3>
      <ul>
        {textBenefitsArr.map((benefit) => (
          <li key={generateKey()}>{benefit}</li>
        ))}
      </ul>
      <button>APPLY NOW</button>
    </section>
  )
}

export default GeneralInformation
