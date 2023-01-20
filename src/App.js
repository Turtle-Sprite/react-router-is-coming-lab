import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Member from './components/Member'
import Houses from './components/Houses'
import House from './components/House'
import gameOfThrones from "./gameOfThrones"


export default function App() {
  let housesArray = gameOfThrones.map((house, idx) => {
    return (
      <div>
        <Link to={`/houses/${house.name}`}>
        <li>{house.name}</li>
        </Link>
      </div>
    )
  })

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/houses' element={<Houses housesArray={housesArray}/>}/>
        <Route path='/houses/:houseId' element={<House info={gameOfThrones}/>}/>
        <Route path='/houses/:houseId/members/:membersId' element={<Member info={gameOfThrones}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}