
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Agence from './pages/agence/Agence'
import Footer from './components/header-footer/Footer'


export default function App() {

  const location = useLocation();
  return (
    <>
      
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  )
}
