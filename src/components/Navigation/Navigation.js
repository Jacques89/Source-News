import React, { useState } from 'react'

import { useSpring, animated } from 'react-spring'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

import '../../styles/Navigation.scss'

const Navigation = ({ changeTopic }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const topAnimation = useSpring({ marginTop: 0, from: { marginTop: -1000, transitionDuration: '.8s' } })
  // const menuAnimation = useSpring({ opacity: menuOpen ? 1 : 0, display: menuOpen ? 'block' : 'none', zIndex: menuOpen ? 2 : 1 })
  
  return (
    <animated.div style={topAnimation}>
      <header>
        <h1 onClick={() => changeTopic('')}>Source News</h1>
          {
            menuOpen ? <FaTimes className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} /> : <FaBars className="icon-menu" onClick={() => setMenuOpen(!menuOpen)} />
          }
      </header>
      <animated.nav>
        <ul>
          <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('business') }}>Business</li>
          <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('sport') }}>Sport</li>
          <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('entertainment') }}>Entertainment</li>
          <li onClick={() => { setMenuOpen(!menuOpen); changeTopic('technology') }}>Technology</li>
        </ul>
      </animated.nav>
    </animated.div>
  )
}

export default Navigation