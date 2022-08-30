import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from '../App';
import Petya from '../components/AllPost/02Petya';
import WannaCry from '../components/AllPost/01WannaCry';
import Error404 from '../components/Error/404';

const RoutesNav = () => {
  return (
    <Router>
    <Routes>
  <Route path="/" element={<App />}/>
  <Route path="WannaCry" element={< WannaCry tittlePost={'WannaCry'}/>}/>
  <Route path="Petya" element={< Petya />}/>
  <Route path="*" element={< Error404 />}/>
</Routes>

</Router>
)
}

export default RoutesNav;