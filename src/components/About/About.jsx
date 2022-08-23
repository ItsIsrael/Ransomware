import React from 'react';
import styled from 'styled-components';

import RansomwareAbout from '../../images/WhatISRansomware.jpg';




const About = () => {
  return (
    <DivContainer id='about'>
      <section className='about__articles'>
        <h1 className='title__about' >¿Qué es ransomware?</h1>
        <p className='description__about'>
          El ransomware (secuestro de información) es el término genérico para referirse a todo tipo de software malicioso que le exige al usuario del equipo el pago de un rescate.
          Al concretar la infección, puede bloquear el acceso al equipo o bien cifrar archivos para dejarlos inaccesibles.
        </p>
      </section>
      <div className='container__img'><img className='image__about' src={RansomwareAbout} alt="" /></div>
      {/* <section className='about__articles'>
        <h1 className='title__about' >Tipos de ataques de ransomware</h1>
        <p className='description__about'>tienen como propósito interrumpir las operaciones comerciales con el fin de obtener ganancias financieras para los intrusos.</p>
      </section> */}
    </DivContainer>
  )
}

export default About;

const DivContainer = styled.div`
height:100vh;
width: 100%;
padding: 20px;
background-color: #8691cc;
overflow: hidden;
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 10px;
z-index: -1;
border: 1px solid red;
.about__articles{
  background-color: #f5080834;
  background: aliceblue;
  box-shadow: 0 8px 32px 0 #ffffffac;
  border-radius: 14px 0;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 600px;
  height: 90vh;
  margin: auto;
  margin-top:20px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;
}
.title__about{
  font-size: 3rem;
  font-weight: bold;
}

.description__about{
  font-size: 2rem;
}



.container__img{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
width: 50%;
border: 1px red solid;
overflow: hidden;
}
.image__about{

}

p{
  text-align: justify;
}

.about__articles:after{
  contain: 'ella';
}

/*RESPONSIVE DESING*/

/* ------- RESPONSIVE WITH IPAD ------ */

@media only screen and (max-width:600px){
  .about__articles{
    font-size: 2rem;
  }

  .title__about{
  font-size: 3rem;
  transition: all 2s ease;

}
  
}


/* ----- RESPONSIVE WITH IPHONES ----- */
@media only screen and (max-width:440px){
  
  .about__articles{
    font-size: 2rem;
  }

  .title__about{
  font-size: 1.5rem;
  transition: all 2s ease;
}
}

/*RESPONSIVE FOLD*/

@media only screen and (max-width:300px){
  .about__articles{
    font-size: 2rem;
  }

  .title__about{
  font-size: 1.5rem;
  transition: all 2s ease;
}
}


`
