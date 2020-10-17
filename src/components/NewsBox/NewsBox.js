import React from 'react'
import '../../styles/NewsBox.scss'

const NewsBox = ({ article }) => {
  return (
    <article data-testid='article'>
      <h3 className="title" data-testid='article-title'>{article.title}</h3>
      <div className="image" data-testid='article-image' style={{ backgroundImage: `url("${article.img}")` }}></div>
      <p className="description" data-testid='article-content'>
        {article.content}
      </p>
      <p className="link">
        <a href={article.source_url} data-testid='external-link'>
          Continue reading
        </a>
      </p>
    </article>
  )
}
export default NewsBox 