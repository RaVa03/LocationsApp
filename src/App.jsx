import {Routes, Route} from 'react-router-dom'
import Favorites from './pages/Favorites'
import AllLocations from './pages/AllLocations'
import LocationDetails from './pages/LocationDetails'
import MainLayout from './components/layout/MainLayout'
import NewLocation from './pages/NewLocation'

function App() {
 
  return(
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<AllLocations/>}></Route>
          <Route path="/favorites-locations" element={<Favorites/>}></Route>
          <Route path="/id/details" element={<LocationDetails/>}></Route>
          <Route path="/new-location" element={<NewLocation/>}></Route>
        </Routes>    
      </MainLayout>
    </>
  )
}

export default App
