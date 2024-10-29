import React from "react"
import Heading from "../../common/Heading"
import "./Winning.css"
import WinningCard from "./WinningCard"

const Winning = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='多种规模选择' subtitle='适用于所有公司的办公选择' />
          <WinningCard />
        </div>
      </section>
    </>
  )
}

export default Winning
