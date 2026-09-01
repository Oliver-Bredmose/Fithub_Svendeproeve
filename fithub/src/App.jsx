import {BrowserRouter, Routes, Route} from 'react-router'
import { Splashscreen } from './Pages/Splashscreen'
import { Home } from './Pages/Home'
import { ClassDetails } from './Pages/Class_Details'
import { Search } from './Pages/Search'
import { MySchedule } from './Pages/My_Schedule'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/home" element={<Home />} />
      <Route path="/classdetails" element={<ClassDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/myschedule" element={<MySchedule />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
