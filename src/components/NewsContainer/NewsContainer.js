import React, { useState, useEffect } from 'react'

import { useSpring, animated } from 'react-spring'

import NewsBox from '../NewsBox/NewsBox'
import "../../styles/NewsContainer.scss"

const NewsContainer = ({ news, topic, userInput }) => {

  const [articles, setArticles] = useState([])
  const articleAnimation = useSpring({ opacity: 1, from: { opacity: 0, transitionDelay: '.5s', transitionDuration: '.5s' } })
  const noNewsAnimation = useSpring({ opacity: 1, from: { opacity: 0, transitionDelay: '2s'} })

  useEffect(() => {
    setArticles(
      news
      .filter(article => article.title.toLocaleLowerCase().indexOf(userInput.toLocaleLowerCase()) !== -1)
      .map((article, i) => {
        if (article.description &&
        typeof article.urlToImage === 'string' && !article.description.includes('https') && (topic === '' ||
        topic === article.topic)) {
          return (
            <animated.div style={articleAnimation} className="box" key={i}><NewsBox key={i} article={article} /></animated.div>
          )
        } else {
          return null
        }
      })
    )
  }, [news, topic, userInput])
 

  return (
    <div className="container" >
      {
        news.filter(article => article.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())).length > 0 ? articles : <animated.p style={noNewsAnimation} className="no-news">No news related to '{userInput}'</animated.p>
      }
    </div>
  )
}

export default NewsContainer