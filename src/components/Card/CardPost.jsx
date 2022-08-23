import CardUnitPosts from "./CardUnitPosts";
import { useState } from 'react';
import './CardUnitPost.scss'
const CardPost = () => {

  const [more, setMore] = useState(false);
  
  const handleClick = () => {
    setMore(!more);
  }

  return (
    <div id="ataques" className={` ${more ? 'content__all__post more' : 'content__all__post'}`}>
            <h1 className="title__distintos">Distintos ataques Ransomware</h1>
      <main class="page-content">
        <CardUnitPosts titlePostName={'WannaCry'} description={'Esto es la descripcion.'} />
        <CardUnitPosts titlePostName={'Petya'} description={'Esto es la descripcion.'} />
        <CardUnitPosts titlePostName={'Ryuk'} description={'Esto es la descripcion.'} />
        <CardUnitPosts titlePostName={'BadRabbit'} description={'Esto es la descripcion.'} />
        <CardUnitPosts classNameCustom={`${more ? 'display__in__screen' : 'display__none'}`} titlePostName={'WannaCry'} description={'Esto es la descripcion.'} />
        <CardUnitPosts classNameCustom={`${more ? 'display__in__screen' : 'display__none'}`} titlePostName={'Petya'} description={'Esto es la descripcion.'} />
        <CardUnitPosts classNameCustom={`${more ? 'display__in__screen' : 'display__none'}`} titlePostName={'Ryuk'} description={'Esto es la descripcion.'} />
        <CardUnitPosts classNameCustom={`${more ? 'display__in__screen' : 'display__none'}`} titlePostName={'BadRabbit'} description={'Esto es la descripcion.'} />
        {
          more && <>
            <button className="btn__more" onClick={handleClick}><span>menos</span><i></i></button></>
        }
        <button className={`${more ? 'btn__more display__none' : 'btn__more'}`} onClick={handleClick}><span>más</span><i></i></button>
      </main>

    </div>
  )
}

export default CardPost;
