import React, { useState } from 'react'

import Navigation from './components/Navigation/Navigation'
import NewsContainer from './components/NewsContainer/NewsContainer'
import './App.scss'

const App = () => {
  return (
    <div>
      <Navigation />
      <NewsContainer />
    </div>
  )
}

export default App