import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments_List from "../components/Comments_List";
import Article_content from "./Article_content";
import NotFoundPage from "./NotFoundPage";

const Article = () => {
  const [articlesInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/articles/${articleId}`
      );
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  }, []);

  const addUpvote = async () => {
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/upvote`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  const article = Article_content.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {article.title}
      </h1>
      <div className="upvotes-section">
        <button onClick={addUpvote}>UpVote</button>
        <p>This article has {articlesInfo.upvotes} upvote(s)</p>
        {article.content.map((paragraph) => (
          <p
            style={{
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "800px",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <Comments_List comments={articlesInfo.comments} />
    </div>
  );
};

export default Article;
