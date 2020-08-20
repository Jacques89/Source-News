import React, { Component } from 'react'

import { FaBars } from 'react-icons/fa'

import '../../styles/Navigation.scss'

export default class Navigation extends Component {
  state = {
    menuOpen: false
  } 

  toggleMenu = e => {
    const toggle = !this.state.menuOpen

    this.setState({
      menuOpen: toggle
    })
  }

  isMenuOpen = () => {
    if (this.state.menuOpen) {
      return ({
        display: 'block',
        zIndex: '2'
      }) 
    }else {
      return ({
        display: 'none',
        zIndex: '-1'
      })
    }
  }
  
  render() { 
    return (
      <header>
        <h1 onClick={() => this.props.filterNews('')} >Source News</h1>
        <h3>Straight from the sources mouth</h3>
        <FaBars className='icon-menu' onClick={this.toggleMenu} />
        <nav style={{ display: this.isMenuOpen() }}>
          <ul>
            <li onClick={() => this.props.filterNews('business')}>Business</li>
            <li onClick={() => this.props.filterNews('sport')}>Sport</li>
            <li onClick={() => this.props.filterNews('entertainment')}>Entertainment</li>
            <li onClick={() => this.props.filterNews('technology')}>Technology</li>
          </ul>
        </nav>
      </header>
    )
  }
}