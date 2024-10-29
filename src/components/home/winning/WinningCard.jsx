import React from "react"
import { winning } from "../../data/Data"

const WinningCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {winning.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default WinningCard
