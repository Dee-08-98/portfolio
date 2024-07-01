
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education'
import Project from './Pages/Project'
import Sidebar from './Components/Sidebar'
import Nav from './Components/Navbar/Nav'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import India from './Components/India'
import TravelAgency from './Pages/TravelAgency'
import HotelMadhuban from './Pages/HotelMadhuban'
import Destiny from './Pages/Destiny'
import ChatApp from './Pages/ChatApp'
import TajjApp from './Pages/TajjApp'
import FoodiesApp from './Pages/FoodiesApp'
import BillGeneratorApp from './Pages/BillGeneratorApp'
import WeatherApp from './Pages/WeatherApp'

function App() {

  return (
    <div className='app'>

      {/* <Nav/> */}

      <BrowserRouter>
        <Nav />
        {/* <Sidebar> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/skills' element={<Skills />}></Route>

          <Route path='/education' element={<Education />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/project/travelAgency' element={<TravelAgency/>}></Route>
          <Route path='/project/destiny' element={<Destiny/>}></Route>
          <Route path='/project/hotelMadhuban' element={<HotelMadhuban/>}></Route>
          <Route path='/project/weather' element={<WeatherApp/>}></Route>
          <Route path='/project/billGenerator' element={<BillGeneratorApp/>}></Route>
          <Route path='/project/foodies' element={<FoodiesApp/>}></Route>
          <Route path='/project/tajjHolidays' element={<TajjApp/>}></Route>
          <Route path='/project/chat' element={<ChatApp/>}></Route>




          <Route path='/contact' element={<Contact />}></Route>


        </Routes>
        {/* </Sidebar> */}
      </BrowserRouter>
    </div>
  )
}

export default App
