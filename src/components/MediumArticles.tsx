import React, { useEffect, useState } from "react";
import MediumCard from "./MediumCard";
import { MediumArticle } from "./interfaces/ArticleInterface";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@DevChris01"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
    console.info("articles", articles);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 ">
      {articles.map((article: MediumArticle, index: number) => (
        <div key={index} className="mb-3">
          <MediumCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default MediumArticles;
