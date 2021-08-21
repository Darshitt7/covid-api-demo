import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
      <footer className="mastfoot mb-auto">
        <div className="inner text-center mb-1 footerx">
          <p>Covid Site <NavLink activeClassName="footernav" to="/"> Copyrights <i className="fa fa-copyright" aria-hidden="true"></i></NavLink>, 
                                by <NavLink activeClassName="footernav" to="/">@drsit7</NavLink>.</p>
        </div>
      </footer>
        </>
    )
}

export default Footer
