import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WannaCry from '../components/AllPost/WannaCry';
import App from '../App';

const RoutesNav = () => {
  return (
    <Router>
    <Routes>
  <Route path="/" element={<App />}/>
  <Route path="WannaCry" element={<WannaCry />}/>
</Routes>

</Router>
)
}

export default RoutesNav;