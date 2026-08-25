
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import GalleryPage from './pages/Gallery/GalleryPage';
import LettersPage from './pages/Letters/LettersPage';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gallery" element={<GalleryPage/>}/>
        <Route path="/Cartas" element={<LettersPage/>}/>
      </Routes>
  )
}

export default App
