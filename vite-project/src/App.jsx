
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import  Navbar  from "./components/Navbar"

import Home from "./components/Home"
import Start from "./components/Start"
import Categories from "./components/Categories"
import About from "./components/About"

export default function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/home" element={<><Home /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz" element={<Start/>} />

        </Routes>
      </BrowserRouter>
        
    </>
  )
}


