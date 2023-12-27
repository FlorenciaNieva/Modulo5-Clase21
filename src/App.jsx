import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import Home from './components/Home'
import Details from './components/Details'
import About from './components/About'
import Page404 from './components/page404'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/details" element={<Details />}/> */}
        <Route path="/details/:id/:cosa" element={<Details />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
