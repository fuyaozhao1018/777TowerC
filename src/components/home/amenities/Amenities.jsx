import React from "react"
import Heading from "../../common/Heading"
import { amenities } from "../../data/Data"
import "./amenities.css"

const Amenities = () => {
  return (
    <>
      <section className='amenities padding'>
        <div className='container'>
          <Heading title='便捷大楼配套' subtitle='我们致力于为您提供一个现代化、高效且具品味的商务办公环境。每一处配套设施都经过精心设计，以满足企业在效率与舒适度上的双重需求，助您轻松应对日常工作和社交需求。' />

          <div className='content grid3 mtop'>
            {amenities.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Amenities
