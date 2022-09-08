import styled from 'styled-components';

import RansomwareAbout from '../../images/Ransomware-about .png';


const About = () => {

  return (
    <DivContainer id='about'>
      <section className='about__articles'>
        <div>
        <h1 className='title__about' >¿Qué es ransomware?</h1>
        <p className='description__about'>
          El ransomware (secuestro de información) es el término genérico para referirse a todo tipo de software malicioso que le exige al usuario del equipo el pago de un rescate.
          Al concretar la infección, puede bloquear el acceso al equipo o bien cifrar archivos para dejarlos inaccesibles.
        </p>
        </div>
        <img className='image__about' src={RansomwareAbout} alt="que-es-ransomware" />
      </section>
    </DivContainer>
  )
}

export default About;


const DivContainer = styled.div`
height:100vh;
width: 100%;
padding: 20px;
background-color: #5fcc3744;
overflow: hidden;
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 10px;
z-index: -1;



@media only screen and (max-width:900px){
    height: 100%;
  }

.about__articles{
  background-color: #f5080834;
  background: aliceblue;
  box-shadow: 0 8px 32px 0 #ffffffac;
  border-radius: 14px 0;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 90%;
  height: 80%;
  margin: auto auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;

}

.title__about{
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.description__about{
  font-size: 2rem;
}

.image__about{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width:700px ;
  max-height: 400px;
  height: 80%;
  width: 80%;
  overflow: hidden;
  box-shadow:2px 2px 10px 1px gray;
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

.about__articles{
  display: flex;
  flex-direction: column;
}
  
}


/* ----- RESPONSIVE WITH IPHONES ----- */
@media only screen and (max-width:440px){

  .about__articles{
    font-size: 2rem;
  }

  .title__about{
  font-size: 2rem;
  transition: all 2s ease;
}
p{
  font-size: 1rem;
}
}

/*RESPONSIVE FOLD*/

@media only screen and (max-width:300px){
  #about{
    height: 100%;
  }

  .about__articles{
    font-size: 2rem;
  }

  .title__about{
  font-size: 1.5rem;
  transition: all 2s ease;
}

}

.image__about{
  max-width: 700px;
  max-height: 600px;
}
`
