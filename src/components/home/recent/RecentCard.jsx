import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Rent" ? "#25b5791a" : "#ff98001a", color: category === "For Rent" ? "#25b579" : "#ff9800" }}>{category}</span>
                  {/* <i className='fa fa-heart'></i> */}
                </div>
                <h4>{name}</h4>
                <p>
                  <i ></i> {location}
                </p>
              </div>
              {/* <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/年  包含NNN费用</label>
                </div> */}
                {/* <span>{type}</span> */}
              {/* </div> */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
