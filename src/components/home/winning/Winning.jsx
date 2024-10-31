import React from "react"
import Heading from "../../common/Heading"
import "./Winning.css"
import WinningCard from "./WinningCard"

const Winning = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='777Tower获得多项世界级大奖' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
          <WinningCard />
        </div>
      </section>
    </>
  )
}

export default Winning
