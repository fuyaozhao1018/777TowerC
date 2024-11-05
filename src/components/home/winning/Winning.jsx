import React from "react"
import Heading from "../../common/Heading"
import "./Winning.css"
import WinningCard from "./WinningCard"

const Winning = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='777Tower获得多项世界级大奖' subtitle='受到广泛认可的高端写字楼典范' />
          <WinningCard />
        </div>
      </section>
    </>
  )
}

export default Winning
