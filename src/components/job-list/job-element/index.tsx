import { Link } from 'react-router-dom'
import { DataInterface } from '../../../utilities/useFetch'

import './style.css'

function JobElement ({ jobObj }: { jobObj: DataInterface }) {
  const { title, pictures: images, createdAt, address, name: departmentName, id } = jobObj
  const image = images[0]
  return (
    <article
      className="flex m-2 bg-customBlue-100 rounded-lg shadow-md
"
    >
      <img className="w-16 h-16 rounded-full flex-shrink-0" src={image} alt={title} />
      <div>
        <div className="flex">
          stars
          <time className="ml-auto block">{createdAt.toLocaleString()}</time>
        </div>
        <div className="w-max">
          <h3>
            <Link to={`/job_list/${id}`} state={{ jobObj }}>
              {title}
            </Link>
          </h3>
          <p>Department name • {departmentName}</p>
          <address>{address}</address>
        </div>
      </div>
    </article>
  )
}

export default JobElement
