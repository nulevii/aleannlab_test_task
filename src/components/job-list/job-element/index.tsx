import { Link } from 'react-router-dom'
import { DataInterface } from '../../../utilities/useFetch'

function JobElement ({ jobObj }: { jobObj: DataInterface }) {
  const { title, pictures: images, createdAt, address, name: departmentName, id } = jobObj
  const image = images[0]
  return (
    <article>
      <div>
        <img src={image} alt={title} />
        <h3>
          <Link to={`/job_list/${id}`} state={{ jobObj }}>
            {title}
          </Link>
        </h3>
        <p>Department name • {departmentName}</p>
        <address>{address}</address>
      </div>
      stars
      <div>
        symbol
        <time>{createdAt.toLocaleString()}</time>
      </div>
    </article>
  )
}

export default JobElement
