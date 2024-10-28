import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='多种规模选择' subtitle='适用于所有公司的办公选择' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
