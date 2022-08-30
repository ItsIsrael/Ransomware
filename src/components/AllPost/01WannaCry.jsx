import Header from './01PostHeader';
import WannaCryImg from '../../images/WannaCryPage.webp'

import './10AllPostStyled.scss';

const WannaCry = ({ tittlePost}) => {
  return (
    <>
      <Header />
      <main className="container__all__posts">
        <div className='container__post__variantes'>
        <section className='section__about'>
        <h1 className='title__post'>¿Qué es el ransomware {tittlePost}?</h1>
        <p className='paragraph__description'>
          WannaCry es un ejemplo de ransomware de cifrado,
          el ransomware ataca cifrando archivos valiosos para que no puedas acceder a ellos, o bien bloqueando tu acceso al ordenador para que no puedas utilizarlo.
        </p>
        </section>
        <div className='container__image'><img  className='img__post' src={WannaCryImg} alt="WannaCry" /></div>
        <div className='description__image'>Lorem ipsum dolor sit amet.</div>
        <article className='article__about__one'>
        <h2 className='title__secondary'>¿Cuál fue el ataque ransomware WannaCry?</h2>
        <p className='paragraph__secondary'>
          El ataque de ransomware WannaCry fue una epidemia global que tuvo lugar en mayo de 2017.
          Este ataque ransomware se propagó a través de ordenadores con Microsoft Windows. Los archivos del usuario se mantuvieron retenidos y se solicitó un rescate en bitcoins para su devolución.
          Si no fuera por el uso continuado de sistemas informáticos obsoletos y por la formación deficiente en torno a la necesidad de actualizar el software, el daño causado por este ataque podría haberse evitado.
        </p>
        </article>
        <article className='article__about__two'>
        <h2 className='title__secondary'>¿Cómo funciona un ataque de WannaCry?</h2>
        <p className='paragraph__secondary'>
          Los cibercriminales responsables del ataque aprovecharon una debilidad en el sistema operativo Microsoft Windows mediante un ataque que supuestamente había desarrollado la Agencia de Seguridad Nacional de Estados Unidos.
          Conocido como EternalBlue, este ataque fue publicado por un grupo de hackers llamado The Shadow Brokers antes del ataque de WannaCry.
          Microsoft publicó un parche de seguridad que protegía los sistemas de los usuarios contra este exploit o vulnerabilidad casi dos meses antes de que comenzara el ataque de ransomware WannaCry. Por desgracia, muchas personas y organizaciones no actualizan periódicamente sus sistemas operativos, por lo que quedaron expuestas al ataque.
          Aquellos que no habían ejecutado una actualización de Microsoft Windows antes del ataque no pudieron beneficiarse del parche, y la vulnerabilidad explotada por EternalBlue los dejó expuestos al ataque.
          </p>
      </article>
      </div>
      </main>
    </>
  )
}

export default WannaCry;
