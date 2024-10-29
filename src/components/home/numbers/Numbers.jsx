import React from "react"
import Heading from "../../common/Heading"
import { numbers } from "../../data/Data"
import "./numbers.css"

const Numbers = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='洛杉矶写字楼全新地标' subtitle='Our Statics' />

          <div className='content grid4 mtop'>
            {numbers.map((val, index) => (
              <div className='box' key={index}>
                <div className='icon'>
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Numbers
