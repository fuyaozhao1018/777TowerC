import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Suite from "../blog/Blog"
import Scales from "../services/Services"
import Contact from "../contact/Contact"
import Amenities from "../amenities/Amenities"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/Scales' component={Scales} />
          <Route exact path='/Suite' component={Suite} />
          <Route exact path='/Amenities' component={Amenities} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
