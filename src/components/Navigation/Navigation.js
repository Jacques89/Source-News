import React, { Component } from 'react'

import { FaBars } from 'react-icons/fa'

import '../../styles/Navigation.scss'

export default class Navigation extends Component {
  state = {
    menuOpen: false
  } 

  toggleMenu = e => {
    let toggle = !this.state.menuOpen

    this.setState({
        menuOpen: toggle
    })
  }

  isMenuOpen = () => {
    if (this.state.menuOpen) {
      return 'block'
    } else {
      return 'none'
    }
  }
  
    

  render() { 
    return (
      <header>
        <h1>Source News</h1>
        <h3>Straight from the sources mouth</h3>
        <FaBars className='icon-menu' onClick={this.toggleMenu} />
        <nav style={{ display: this.isMenuOpen() }}>
          <ul>
            <li><a href="#">Politics</a></li>
            <li><a href="#">Economics</a></li>
            <li><a href="#">Sport</a></li>
            <li><a href="#">Culture</a></li>
            <li><a href="#">Technology</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}