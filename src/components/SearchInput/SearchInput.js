import React, { useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'

import '../../styles/SearchForm.scss'

const SearchInput = ({ handleSubmit }) => { 

  const [input, setInput] = useState('')
  const topAnimation = useSpring({ marginTop: 0, from: { marginTop: -1000, transitionDuration: '.8s' } })

  const getInput = e => {
    setInput(e.target.value)
  }

  return (
    <animated.form
      className="search-bar"
      style={topAnimation} 
      action="#" 
      onSubmit={(e) => { 
        e.preventDefault(); 
        handleSubmit(input); 
        setInput('') 
      }}>
      <FaSearch className="search-icon" />
        <input type="text" onChange={getInput} value={input} />
        <button className="search-btn"></button>
    </animated.form>
)
}

export default SearchInput