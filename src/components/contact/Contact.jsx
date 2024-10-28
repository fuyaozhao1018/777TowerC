import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='联系我们' title='获取更多的具体信息' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>填写问询表格</h4> <br />
            <div>
              <input type='text' placeholder='姓名' />
              <input type='text' placeholder='电子邮箱' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>提交申请</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
