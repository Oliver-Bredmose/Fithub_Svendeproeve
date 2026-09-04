import {BrowserRouter, Routes, Route} from 'react-router'
import { Splashscreen } from './Pages/Splashscreen'
import { Home } from './Pages/Home'
import { ClassDetails } from './Pages/Class_Details'
import { Search } from './Pages/Search'
import { MySchedule } from './Pages/My_Schedule'
import { Navbar } from './Components/NavBar/Navbar'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/classdetails/:id" element={<ClassDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/myschedule" element={<MySchedule />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
