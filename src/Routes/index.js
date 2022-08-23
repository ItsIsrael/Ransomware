import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WannaCry from '../components/AllPost/WannaCry';
import App from '../App';
import Petya from '../components/AllPost/Petya';

const RoutesNav = () => {
  return (
    <Router>
    <Routes>
  <Route path="/" element={<App />}/>
  <Route path="WannaCry" element={<WannaCry />}/>
  <Route path="Petya" element={<Petya />}/>
</Routes>

</Router>
)
}

export default RoutesNav;