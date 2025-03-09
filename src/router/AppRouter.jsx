import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home"
import NavBar from "../components/navBar/NavBar"
import Men from '../pages/Men';
import Women from '../pages/Women';

const AppRouter = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default AppRouter