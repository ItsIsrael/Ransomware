import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';


const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  // fix the Active class
  const [fix, setFix] = useState(false);

  const handlerClick = () => {
    setClicked(!clicked)
  }
  const setFixed = () => {
    if (window.scrollY >= 680) {
      setFix(true)
    } else {
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed);

  // Modificador de la dimension de la pantalla

  const start = () => {
    let pantalla = document.documentElement.clientWidth;
    if (pantalla >= 767 && clicked === true) {
      setClicked(false)
    }
  }
  window.onresize = start;
  start();
  
  return (
    <>
      <NavbarStyled>
        <div className={` ${fix ? 'container__navbar__all  fixed' : 'container__navbar__all'} ${clicked ? '' : 'active'} `}>
          <div>
            <h2 className='title__min__screen__full'><Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={clicked ? handlerClick : ''} href='/'><span>R</span>ansom<span>W</span>are </Link></h2>
            <h2 className='title__min__screen'><Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={clicked ? handlerClick : ''} href='/'><span>R</span><span>W</span></Link></h2>

          </div>
          {/* ${clicked ? 'navbar__menu active' : 'navbar__menu'} */}
          <div className={` ${clicked ? 'navbar__menu active' : 'navbar__menu'} `}>
            <ul className='navbar__links'>
              <li className='navbar__item' ><Link activeClass="isActive" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={clicked ? handlerClick : ''} href='/'>Inicio</Link></li>
              <li className='navbar__item' ><Link activeClass="isActive" to="about" spy={true} smooth={true} offset={-75} duration={500} onClick={clicked ? handlerClick : ''} href='#about'>Acerca de</Link></li>
              <li className='navbar__item' ><Link activeClass="isActive" to="ataques" spy={true} smooth={true} offset={-75} duration={500} onClick={clicked ? handlerClick : ''} href='#ransomware-infecciones'>Ataques</Link></li>
              <li className='navbar__item' ><Link activeClass="isActive" to="contact" spy={true} smooth={true} offset={-75} duration={500} onClick={clicked ? handlerClick : ''} href='#raas'>Raas</Link></li>
              <li className='navbar__item' ><Link activeClass="isActive" to="footer" spy={true} smooth={true} offset={-75} duration={500} onClick={clicked ? handlerClick : ''} href='#Redes'>Redes</Link></li>
            </ul>
          </div>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handlerClick={handlerClick}
            fix={fix} />
        </div>
      </NavbarStyled>
    </>
  )
};
export default Navbar;

const NavbarStyled = styled.nav`
position: fixed;
margin-top: -10px;
width: 100%;
z-index: 200;

/* <------- Title for min Screens ------> */
.title__min__screen{
display: none;
}
.container__navbar__all{
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-top: 1.2rem;
  justify-content: space-between;
}
h2{
  justify-content: flex-start;
  font-size: 3.4rem;

  &:hover{
    color: #000;
    text-shadow:2px 4px 3px #474747b8;
  }
  a{
    
    text-decoration: none;
    color: #ffffff;
  }
  span{
    color: #a30000;
    font-size: 3.5rem;
  }

}
/* .navbar__links :active{
  color: red;
} */

.isActive{
  border-bottom: #ca2f2f 5px outset;
}

  .fixed{
    position: fixed;
  background-color: #ffffff34;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 100%;
  height: 80px;
  top: 0px;
  text-align: center;
a{
    color: #000;
  }
  }

.navbar__menu {
  display: flex;
  a{
    text-decoration: none;
    padding: 10px;
    color: #ffffff;
    font-size: 1.2rem;
    display: block;
    font-weight: bold;
  }


  /* <-- Responsible media Menu --> */
  @media only screen and (max-width: 767px) {
  display: none;
    }
  /* <---------------------------->*/
  }

  .navbar__menu .navbar__links .navbar__item{
    list-style: none;
    cursor: pointer;
  }

  .navbar__menu .navbar__links {
    display: flex;
  }
.navbar__menu.active{
  display: flex;
  background-color: #ffffff34;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 8.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 85%;
  height: 400px;
  .navbar__links{
    cursor: pointer;
  }
  a{
    font-size: 2rem;
  }

}


/* <-------- Responsible Desing ---------> */

  @media (min-width: 767px) {
    .burger{
    display: none;
    }
    .navbar__menu.active{
display: flex;
flex-wrap: wrap;
background-color: #ffffff;
backdrop-filter: none;
box-shadow: none;
background-color: none;
width: 600px;
height: 10%;
.navbar__links{
    cursor: pointer;
  }
  a{
    font-size: 1.5rem;
  }
  }
  }

@media (max-width: 767px) {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  justify-content:space-between;
  overflow: hidden;
  margin-top: 0;
  position: fixed;
  width: 100%;

  h2{
    position: fixed;
    top: 20px;
    font-size: 30px;
    transition: all 100ms ease;
    span{
      font-size: 40px;
    }
  }
  .burger{
    order: 1;
    margin: 30px;
    margin-top:20px;
    align-self: flex-end;
    z-index: 100;
    cursor: pointer;
  }

  .navbar__menu .navbar__links {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    a{
      color: #fcfcfc;
      font-weight: 600;
      letter-spacing: .6px;
    }
    
  }
  .color.navbar__menu .navbar__links{
      a{
        color: black;
        font-weight: bold;
      }
}
  .container__navbar__all .navbar__menu{
    height: 300px;
    width: 80%;
    position: fixed;
    top:85px;
    margin: auto;
  }
}
  /* <----------------------------------->*/


    /* <----------  Hight Zoom --------> */
    @media (max-width: 316px) {
      .title__min__screen__full{
        display:none;
        span{
          font-size:1.5rem;
          display: inline-block;
        }
      }
      .title__min__screen{
        display: inline;
      } 
      .burger{
        
      }
      .navbar__menu.active{
        overflow: hidden;
        a{
          font-size: 1.5rem;
        }
      }

      .navbar__menu .navbar__links {
      display: flex;
      padding:0px;
      margin: 0px;
      }
    }

    /* <-------- ZOOM --------> */
    @media (min-width:2024px) {
      .title__min__screen__full{
        font-size: 80px;
        transition: all 100ms ease-in-out;
        span{
          font-size: 100px;
          transition: all 100ms ease-in-out;
        }
      }
      .navbar__menu{
        a{
          font-size: 40px;
        }
      }

    }
`