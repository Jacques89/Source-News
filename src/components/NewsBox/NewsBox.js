import React from 'react'
import '../../styles/NewsBox.scss'

const NewsBox = ({ article }) => {
  return (
    <article>
      <h3 className="title" testID='article-title'>{article.title}</h3>
      <div className="image" style={{ backgroundImage: `url("${article.img}")` }}></div>
      <p className="description">
        {article.content}
      </p>
      <p className="link">
        <a href={article.source_url}>Continue reading</a>
      </p>
    </article>
  )
}
export default NewsBox