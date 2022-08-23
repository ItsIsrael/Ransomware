import { Link } from 'react-router-dom'
import './PreviewButtonBack.scss'

const PreviewPage = () => {
  return (
    <div className='container__prev__icon'>
      <Link to='/' class="back back--one">
        <span class="top-left"></span>
        <span class="top-right"></span>
        <span class="bottom-left"></span>
        <span class="bottom-right"></span>
        <span class="stalk"></span>
        <span class="text">REGRESAR</span>
      </Link>
    </div>
  )
}

export default PreviewPage;