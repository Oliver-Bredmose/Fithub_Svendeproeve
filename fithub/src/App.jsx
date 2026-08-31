import {BrowserRouter, Routes, Route} from 'react-router'
import { SplashScreen } from './Pages/Splash_screen'
import { Home } from './Pages/Home'
import { ClassDetails } from './Pages/Class_Details'
import { Search } from './Pages/Search'
import { MySchedule } from './Pages/My_Schedule'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" index element={<SplashScreen/>}/>
      <Route path="/home" index element={<Home/>}/>
      <Route path="/classdetails" index element={<ClassDetails/>}/>
      <Route path="/search" index element={<Search/>}/>
      <Route path="/myschedule" index element={<MySchedule/>}/>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
