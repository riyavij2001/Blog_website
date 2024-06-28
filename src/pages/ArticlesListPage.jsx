import React from "react";
import { Link } from "react-router-dom";
import Article_content from "./Article_content";
import ArticlesList from "../components/ArticlesList";

function ArticlesListPage() {
  return (
    <div>
      <h1
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Articles
      </h1>
      <ArticlesList ArticlesList={ArticlesList} />
    </div>
  );
}

export default ArticlesListPage;
