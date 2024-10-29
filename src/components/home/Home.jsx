import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Route from "./route/Route"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import Amenities from "./amenities/Amenities"

const Home = () => {
  return (
    <>
      <Hero />

      <Route />
      <Amenities />
      <Featured />
      <Recent />
      <Location />
      <Awards />

      <Team />
      {/* <Price /> */}
    </>
  )
}

export default Home
