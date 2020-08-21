import React, { Component } from 'react'
import '../../styles/SearchForm.scss'
import { FaSearch } from 'react-icons/fa'

export default class SearchInput extends Component {
  state = {
    input: ''
  }

  getInput = e => {
    e.preventDefault()
    this.setState({
      input: e.target.value
    })
    this.props.passInput(this.state.input)
  }

  render() {
    return (
      <form action="search-news" className="search-bar" >
        <FaSearch className="search-icon" /><input type="text" onChange={this.getInput} value={this.state.input} />
      </form>
    )
  }
}