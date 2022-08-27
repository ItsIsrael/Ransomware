import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App';
import Petya from '../components/AllPost/02Petya';
import WannaCry from '../components/AllPost/01WannaCry';

const RoutesNav = () => {
  return (
    <Router>
    <Routes>
  <Route path="/" element={<App />}/>
  <Route path="WannaCry" element={< WannaCry />}/>
  <Route path="Petya" element={< Petya />}/>
</Routes>

</Router>
)
}

export default RoutesNav;