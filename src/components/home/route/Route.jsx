import React from "react"
import Heading from "../../common/Heading"
import "./route.css"

const Route = () => {
  return (
    <>
      <section className='route'>
        <div className='container'>
          <Heading title='绝佳地理位置 ' />

          {/* <Heading title='探索洛杉矶新地标 ' subtitle='新一代洛杉矶市中心高端写字楼' /> */}

          {/* <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form> */}
        </div>
      </section>
    </>
  )
}

export default Route