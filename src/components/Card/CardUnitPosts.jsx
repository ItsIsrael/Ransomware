import React from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import WannaCry from '../AllPost/WannaCry'

const CardUnitPosts = ({ title, RefImg, postName }) => {
<Router>
<Routes>
  <Route path={postName} element={<WannaCry />}/>
</Routes>
</Router>
  return (
    <ContainerCardsUnitPost>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
        </div>
        <div className="card__content">
          <h1>{title}</h1>
          <div className='container__img'><img src={RefImg} alt={title} /></div>
          <Link to={postName} >Leer Mas..</Link>
        </div>
      </div>
    </ContainerCardsUnitPost>
  )
}

export default CardUnitPosts

const ContainerCardsUnitPost = styled.div`
.card {
 width: 190px;
 height: 254px;
 margin: 0 auto;
 background-color: #F8FBFE;
 border-radius: 8px;
 z-index: 1;
}
.tools {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-align: center;
     -ms-flex-align: center;
  align-items: center;
 padding: 9px;
}
.circle {
 padding: 0 4px;
}
.box {
 display: inline-block;
 -webkit-box-align: center;
     -ms-flex-align: center;
  align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}
.container__img{
    display: flex;
    justify-content: center;
    align-items: center;
}
img{
    width: 100px;
    height: 100px;
}

`