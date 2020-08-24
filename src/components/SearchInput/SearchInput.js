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

  console.log('SearchInput', input)

  return (
    <animated.form style={topAnimation} action="#" className="search-bar" onSubmit={(e) => { e.preventDefault(); handleSubmit(input); setInput('') }} >
      <input type="text" onChange={getInput} value={input} /><button className="search-btn"><FaSearch className="search-icon" /></button>
    </animated.form>
)
}

export default SearchInput