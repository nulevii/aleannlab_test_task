import { DataInterface } from '../../../utilities/dataInterface'
import { generateKey } from '../../../utilities/keyGenerator'

function AttachedImages ({
  images,
  name
}: {
  images: DataInterface['pictures']
  name: DataInterface['name']
}) {
  return (
    <section>
      <h3>Attached images</h3>
      <ul>
        {images.map((image) => (
          <img key={generateKey()} src={image} alt="company"></img>
        ))}
      </ul>
    </section>
  )
}

export default AttachedImages
