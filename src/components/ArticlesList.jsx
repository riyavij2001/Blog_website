import React from "react";
import Article_content from "../pages/Article_content";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
return (
  <div>
    
    {Article_content.map((article) => (
      <Link
        key={article.name}
        className="article-list-item"
        to={`/articles/${article.name}`}
      >
        <h3
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "800px",
          }}
        >
          {article.content[0].substring(0, 150)}...
        </p>
      </Link>
    ))}
  </div>
)};

export default ArticlesList;
