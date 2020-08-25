import React, { useState, useEffect } from 'react'

import { useSpring, animated } from 'react-spring'

import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

const NewsContainer = ({ news, category, userInput }) => {

  const [articles, setArticles] = useState('')
  const articleAnimation = useSpring({ opacity: 1, from: { opacity: 0, transitionDelay: '.5s', transitionDuration: '.5s' } })

  useEffect(() => {
    setArticles(
      news
      .filter(article => article.category === category)
      .map((article, i) => 
        <animated.div style={articleAnimation} className="box" key={i}><NewsBox key={i} article={article} /></animated.div>
      )
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput, category, news])
 

  return (
    <div className="container">
      {
        articles &&
        !userInput && articles.length === 0 ?
        `Sorry, there is no news in ${category} currently available`
        : userInput && articles.length === 0 ?
          `Sorry, there is no news currently available to ${userInput} in the ${category} category`
          :
          articles
      }
    </div>
  )
}

export default NewsContainer