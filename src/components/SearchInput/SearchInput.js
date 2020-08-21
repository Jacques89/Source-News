import React, { useState } from 'react'
import '../../styles/SearchForm.scss'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({ handleSubmit }) => { 

  const [input, setInput] = useState('')

  const getInput = e => {
    setInput(e.target.value)
  }

  console.log('SearchInput', input)

  return (
    <form 
      action="search-news" 
      className="search-bar" 
      onSubmit={(e) => { e.preventDefault(); handleSubmit(input); setInput('') }}>
      <FaSearch className="search-icon" />
      <input type="text" onChange={getInput} value={input} />
    </form>
  )
}

export default SearchInput