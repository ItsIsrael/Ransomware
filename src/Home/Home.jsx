import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import './Home.scss';


const HomePage = () => {
  return (
    <>
      <Background className="container__background__img" id='home'>
        <div className='typewriter'>
          <h2>¿Qué es ransomware?</h2>
          <h2 className='variantes'>
            Variantes
          </h2>
          <Typewriter
            options={{
              strings: [
                '<i class="text_typed">Petya</i>',
                '<i class="text_typed">Ryuk</i>',
                '<i class="text_typed">WannaCry</i>',
                '<i class="text_typed">Mamba</i>',
                '<i class="text_typed">REvil</i>',
                '<i class="text_typed">BadRabbit</i>',
                '<i class="text_typed">CryptoLocker</i>',
                '<i class="text_typed">Netwalker</i>',],
              autoStart: true,
              loop: true,
              pauseFor: 200,
            }}
          />
        </div>
      </Background>

    </>
  )
}

export default HomePage;

const Background = styled.div`
background-color: #000c3ba8;
  width: 100%;
  height: 100vh;
`