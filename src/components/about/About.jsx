import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/777_Tower.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='关于我们 - 我们是谁？' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='公司故事' subtitle='查看我们公司的故事和工作进展' />

            <p>欢迎来到777 Tower，这座矗立于洛杉矶心脏地带的标志性建筑。777 Tower占地0.73英亩，52层的设计结合了现代美学与卓越功能，拥有超过100万平方英尺的可租赁空间，这座洛杉矶城市天际线的点睛之笔可以满足您对高品质生活与工作的追求。4米高挑层高营造出开阔而通透的环境，单层面积约为2万平方英尺，灵活的布局为各种商业需求提供了解决方案，配套停车楼确保租户和访客的轻松出入。</p>


            <p>777 Tower周边配套设施一应俱全。现代化的健身中心让您在忙碌中保持活力，而丰富的特色餐饮选择则确保您在工作之余享受美食。时装品牌店和33万平方英尺的商业设施为时尚与购物爱好者提供了丰富的选择，满足您日常生活的各种需求。此外，周边交通便利，高速公路与公共交通网络发达，使您通勤和出行更加轻松。选择777 Tower，尽享城市生活的便利与丰富。</p>


            <p>777 Tower提供一系列卓越的配套设施，进一步提升您的生活和工作体验。轩敞的大堂由César Pelli巧匠设计，结合精致的大理石、专业的前台服务和全天候安保，提供高端的接待体验。整层多功能活动区域适合商务洽谈与社交活动，灵活的布局满足各种需求；精致咖啡文化空间精选优质豆源与专业手艺，让您在休闲时刻尽享咖啡的魅力。此外，现代商务会议室灵活多样的布局与智能设备支持，营造出高雅的商务氛围，适合各种会议需求；而精奢餐饮空间则为您提供宽敞明亮的环境，可容纳350人，适合举办各类聚会和活动。</p>


            <p>777 Tower不仅提供理想的办公环境，还有多种规模的租赁选择，满足不同公司的需求。整层办公空间现有12个单元在租。对于需要10,000平方英尺以上的企业，提供25个单元可供选择；5,000到10,000平方英尺的空间有41个单元可供租赁；3,000到5,000平方英尺的办公单元有19个；而1,000到3,000平方英尺的灵活选择则有28个单元在租。无论您是大型企业还是初创公司，777 Tower都能为您提供完美的办公解决方案。</p>


            <p>选择777 Tower，不仅是选择一个办公空间，更是选择一个充满活力与机遇的社区。这里汇聚了现代生活的便利与商业的多样性，让您在繁忙的都市中依然能享受高品质的生活与工作体验。无论您是寻求理想办公环境的企业，还是渴望在舒适空间中社交与合作的专业人士，777 Tower都能满足您的所有需求。让我们777 Tower全新的管理团队与您一起，共同开创未来的无限可能！欢迎联系我们，预约参观，开启您的新篇章。</p>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p> */}
            {/* <button className='btn2'>More About Us</button> */}
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
