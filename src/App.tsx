
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import GalleryPage from './pages/Gallery/GalleryPage';


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gallery" element={<GalleryPage/>}/>
      </Routes>
  )
}

export default App
