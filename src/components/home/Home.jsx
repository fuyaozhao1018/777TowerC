import React from "react"
// import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Route from "./route/Route"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Amenities from "./amenities/Amenities"
import Numbers from "./numbers/Numbers"
import Winning from "./winning/Winning"

const Home = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <Route />
      <Amenities />
      <Featured />
      <Recent />
      <Location />
      <Winning />
      {/* <Team /> */}

      </>
  )
}

export default Home
