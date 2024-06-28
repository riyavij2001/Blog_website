import React from 'react'
import { useParams } from 'react-router-dom'
import Article_content from './Article_content'
import NotFoundPage from './NotFoundPage';

function Article() {
    const {articleId} = useParams();
    const article = Article_content.find(article => article.name === articleId);

    if(!article) {
        return <NotFoundPage />
    }

  return (
    <div>
        <h1 style={{justifyContent:'center', alignItems:'center', display:'flex'}}>{article.title}</h1>
        {article.content.map(paragraph => (
            <p style={{margin: 'auto',justifyContent:'center', alignItems:'center', display:'flex', width:'800px'}}>{paragraph}</p>
        ))}
    </div>
  )
}

export default Article