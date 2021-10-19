import React from 'react'

import '../../styles/LoadingPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingPage = () => {
  return (
    <div data-testid='loading-page' className='loadingBackground'>
      <p className='loading-message'>
        loading
        <FontAwesomeIcon data-testid='spinner' icon={faSpinner} spin />
      </p>
    </div>
  )
}

export default LoadingPage
