import React from 'react'
import { useParams } from 'react-router-dom'

function Article() {
    const {articleId} = useParams();
  return (
    <div>Article for id : {articleId}</div>
  )
}

export default Article