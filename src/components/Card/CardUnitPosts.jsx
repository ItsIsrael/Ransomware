import { Link } from 'react-router-dom'
import './CardUnitPost.scss'

const CardUnitPosts = ({ titlePostName, RefImg, description, classNameCustom, screen }) => {

  return (
<>
  <div loading='lazy' className={`card ${classNameCustom || ''}`}>
    <div className="content">
      <h2 className="title">{titlePostName}</h2>
      <p className="copy">{description}</p>
      <Link className='btn' to={titlePostName}>Leer más..</Link>
    </div>
  </div>
</>
  )
}

export default CardUnitPosts;