import Navbar from './components/Navbar/Navbar';

import HomePage from './Home/Home';
import About from './components/About/About';
import CardPost from './components/Card/CardPost';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HomePage/>
    <About />
    <CardPost />
    <Contact />
    <Footer/>
    </>
  )
}

export default App