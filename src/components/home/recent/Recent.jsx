import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='热门在租房型' subtitle='精装标准带给您完美办公环境' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
