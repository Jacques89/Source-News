import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'

import '../../styles/SearchForm.scss'

const SearchInput = ({ handleSubmit }) => {
  const [input, setInput] = useState('')
  const topAnimation = useSpring({
    marginTop: 0,
    from: { marginTop: -1000, transitionDuration: '.8s' }
  })

  const getInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <animated.form
      className='search-bar'
      style={topAnimation}
      action='#'
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(input)
        setInput('')
      }}
    >
      <button className='search-btn'>
        <FaSearch className='search-icon' />
      </button>
      <input
        type='text'
        aria-labelledby='searchBar'
        placeholder='Search'
        onChange={getInput}
        value={input}
      />
    </animated.form>
  )
}

export default SearchInput
