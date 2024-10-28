import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>想了解更多 ?</h1>
              <p>我们会帮您找到您的下一间办公室。</p>
            </div>
            <button className='btn5'>联系我们</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>需要更多信息？</h2>
              <p>在收件箱中接收直接发送的更新、热门交易、即将到来的活动新闻</p>

              <div className='input flex'>
                <input type='text' placeholder='电子邮箱' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

    </>
  )
}

export default Footer
