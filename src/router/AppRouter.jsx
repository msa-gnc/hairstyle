import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home"
import NavBar from "../components/navBar/NavBar"
import WomenStyles from '../pages/WomenStyles';
import MenStyles from '../pages/MenStyles';
import Comment from '../pages/Comment';

const AppRouter = () => {
  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<MenStyles/>} />
        <Route path="/women" element={<WomenStyles/>} />
        <Route path="/comment" element={<Comment/>} />
      </Routes>
      </BrowserRouter>
      
    
  )
}

export default AppRouter